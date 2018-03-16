const express = require('express');

const userIdMap = {
  admin: 1,
  inactive: 2,
  user: 3,
};

module.exports = (database) => {
  let router = express.Router();

  router.get('/sessions', (request, response) => {
    const user = database
      .get('users')
      .find({id: userIdMap[request.headers['x-custom-session']]})
      .value();

    if (!user) {
      response.status(401).send('Unauthorized');

      return;
    }

    response.json({session: {user}});
  });

  return router;
};
