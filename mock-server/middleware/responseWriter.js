const requireUncached = require('require-uncached');

const reponseUtils = requireUncached('../utils/response');

module.exports = (request, response, next) => {
  const originalSend = response.send;

  response.send = function(string) {
    let body = string instanceof Buffer ? string.toString() : string;

    originalSend.call(this, reponseUtils.formatResponse(response, body, request.originalUrl));
  };

  next();
};
