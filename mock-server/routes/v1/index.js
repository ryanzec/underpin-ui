const requireUncached = require('require-uncached');

const sessionRoutes = requireUncached('./sessions');

module.exports = (database) => {
  return [sessionRoutes(database)];
};
