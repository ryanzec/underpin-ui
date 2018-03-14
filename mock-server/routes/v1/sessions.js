const express = require('express');

const userIdMap = {
  active: 1,
  inactive: 2,
};

module.exports = (database) => {
  let router = express.Router();

  router.get('/sessions', (request, response) => {
    const user = database
      .get('users')
      .find({id: userIdMap[request.headers['x-custom-session']]})
      .value();

    response.json({user});
  });

  return router;
};
