let path = require('path');
let process = require('process');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractSass = new ExtractTextPlugin({
  filename: 'main-[chunkhash].css',
  allChunks: true,
});

const isDevMode = process.env.NODE_ENV === 'development';
const webpackConstants = require('./webpack.constants');

let webpackConfig = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
      app: path.resolve(__dirname, '..', 'web', 'app'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, '..', 'node_modules'), /(.*).example\.js$/],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.module\.(css|scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 3,
                modules: true,
                sourceMap: isDevMode,
                localIdentName: isDevMode ? '[name]__[local]___[hash:base64:5]' : '[hash:base64]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'resolve-url-loader',
              query: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                // NOTE: source maps are needed here for the resolve url loader to work properly
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(css|scss)$/,
        include: /(styles)/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 3,
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'resolve-url-loader',
              query: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                // NOTE: source maps are needed here for the resolve url loader to work properly
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: webpackConstants.PUBLIC_PATH,
            name: 'images/[hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '..', 'web', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${isDevMode ? 'development' : 'production'}"`,
    }),
  ],
  output: {
    path: webpackConstants.BUILD_PATH,
    filename: '[name]-[chunkhash].js',
    publicPath: webpackConstants.PUBLIC_PATH,
  },
};

module.exports = webpackConfig;
