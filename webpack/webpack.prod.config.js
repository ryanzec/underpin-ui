let path = require('path');
let webpack = require('webpack');

const webpackConfig = require('./webpack.base.config');

webpackConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  })
);

webpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    },
  })
);

webpackConfig.entry = {
  //3rd party libraries
  libraries: [
    'babel-polyfill',
    'axios',
    'bluebird',
    'fast-equals',
    'final-form',
    'history',
    'holderjs',
    'lodash',
    'moize',
    'moment',
    'moment-timezone',
    'popper.js',
    'prop-types',
    'redux',
    'redux-actions',
    'redux-thunk',
    'store-cacheable',
    'unchanged',
    'react',
    'react-dom',
    'react-dropzone',
    'react-final-form',
    'react-icons/lib/md',
    'react-redux',
    'react-router-dom',
    'react-router-redux',
    'react-transition-group',
    'styled-components',
  ],

  //application code
  application: [path.resolve(__dirname, '..', 'web', 'app', 'application.js')],
};

module.exports = webpackConfig;
