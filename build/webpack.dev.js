const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { server } = require('./config');

module.exports = merge(common, {
  entry: ['react-hot-loader/patch', './src/index.js'],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: server,
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
