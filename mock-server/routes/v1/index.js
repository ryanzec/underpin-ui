const requireUncached = require('require-uncached');

const sessionRoutes = requireUncached('./sessions');

module.exports = [sessionRoutes];
