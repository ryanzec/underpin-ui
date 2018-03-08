let path = require('path');
let CircularDependencyPlugin = require('circular-dependency-plugin');

const webpackConfig = require('./webpack.base.config');
const webpackConstants = require('./webpack.constants');

webpackConfig.devServer = {
  host: webpackConstants.DEV_SERVER_HOSTNAME,
  inline: true,
  lazy: false,
  noInfo: false,
  quiet: false,
  port: webpackConstants.DEV_SERVER_PORT,
  stats: {
    colors: true,
    pregress: true,
  },
  historyApiFallback: true,
};

webpackConfig.devtool = 'source-map';

webpackConfig.plugins.push(
  new CircularDependencyPlugin({
    exclude: /node_modules/,
  })
);

webpackConfig.entry = path.resolve(__dirname, '..', 'web', 'app', 'application.js');

module.exports = webpackConfig;
