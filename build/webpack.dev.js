const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { server } = require('./config');

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.js'],
  devtool: 'inline-source-map',
  devServer: server,
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
