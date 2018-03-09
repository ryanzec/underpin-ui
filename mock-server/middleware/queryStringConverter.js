const url = require('url');
const querystring = require('querystring');

module.exports = (request, response, next) => {
  // @todo: figure out all the pagination mappings
  if (request.query.limit) {
    request.query._limit = request.query.limit;

    delete request.query.limit;
  }

  next();
};
