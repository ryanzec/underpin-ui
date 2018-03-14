const url = require('url');
const querystring = require('querystring');

module.exports = (request, response, next) => {
  if (!request.headers['x-custom-session']) {
    response.status(401).send('Unauthenticated');

    return;
  }

  next();
};
