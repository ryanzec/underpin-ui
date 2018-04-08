const requireUncached = require('require-uncached');

const sessionChecker = requireUncached('./sessionChecker.js');
const queryStringConverter = requireUncached('./queryStringConverter');
const responseWriter = requireUncached('./responseWriter');

module.exports = [queryStringConverter, responseWriter, sessionChecker];
