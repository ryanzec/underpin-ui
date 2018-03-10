const requireUncached = require('require-uncached');

const queryStringConverter = requireUncached('./queryStringConverter');
const responseWriter = requireUncached('./responseWriter');

module.exports = [queryStringConverter, responseWriter];
