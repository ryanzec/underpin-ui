let path = require('path');
let process = require('process');

const isDevMode = process.env.NODE_ENV === 'development';
const DEV_SERVER_HOSTNAME = 'localhost';
const DEV_SERVER_PORT = 8080;
const PUBLIC_PATH = isDevMode ? `http://${DEV_SERVER_HOSTNAME}:${DEV_SERVER_PORT}` : '/';
const BUILD_PATH = path.resolve(__dirname, '..', 'web', 'build');

module.exports = {
  DEV_SERVER_HOSTNAME,
  DEV_SERVER_PORT,
  PUBLIC_PATH,
  BUILD_PATH,
};
