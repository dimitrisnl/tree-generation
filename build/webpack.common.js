const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const { paths, options } = require('./config');

module.exports = {
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  module: options,
  resolve: paths,
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      verbose: false,
      dry: false,
    }),
  ],
};
