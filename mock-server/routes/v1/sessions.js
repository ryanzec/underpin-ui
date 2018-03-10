const express = require('express');
const users = require('../../data/users');

let router = express.Router();

router.get('/sessions', (request, response) => {
  const user = request.query.sessionId === 'active' ? users.active : users.inactive;

  response.json({user});
});

module.exports = router;
