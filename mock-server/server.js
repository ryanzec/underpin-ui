require('colors');
const requireUncached = require('require-uncached');
const fs = require('fs');
const path = require('path');
const process = require('process');
const jsonServer = require('json-server');
const enableDestroy = require('server-destroy');
const {deepEqual} = require('fast-equals');
const middlewares = jsonServer.defaults();

const SERVER_ROOT = path.dirname(process.argv[1]);
const PORT = 3001;
const DATABASE_FILE_NAME = 'db.json';
const DATABASE_FILE_PATH = path.resolve(SERVER_ROOT, DATABASE_FILE_NAME);

let server;
let router;

const startServer = () => {
  const customV1Routes = requireUncached('./routes/v1/index');
  const customMiddleware = requireUncached('./middleware');
  const app = jsonServer.create();

  router = jsonServer.router(DATABASE_FILE_PATH);

  app.use(middlewares);
  app.use(customMiddleware);
  app.use('/api/v1', customV1Routes);
  app.use('/api/v1', router);
  server = app.listen(PORT, () => {
    console.log('JSON Server is running'.green);
    console.log(`Port: ${PORT}`.green);
    console.log(`Database File: ${DATABASE_FILE_PATH}`.green);
  });

  enableDestroy(server);
};

fs.watch(SERVER_ROOT, (event, file) => {
  if (path.resolve(SERVER_ROOT, file) === DATABASE_FILE_PATH) {
    const diskData = fs.readFileSync(DATABASE_FILE_PATH, {encoding: 'utf-8'});

    // only need to reload the server if the database file changes from outside
    // this process
    if (server && !deepEqual(JSON.parse(diskData), router.db.getState())) {
      console.log('outside database change detected, restarting server...'.cyan);
      server.destroy();
      startServer();
    }
  }
});

fs.watch(`${SERVER_ROOT}/middleware`, {recursive: true}, (event, file) => {
  console.log('middleware changes detected, restarting server...'.cyan);
  server.destroy();
  startServer();
});

fs.watch(`${SERVER_ROOT}/routes`, {recursive: true}, (event, file) => {
  console.log('routes changes detected, restarting server...'.cyan);
  server.destroy();
  startServer();
});

startServer();
