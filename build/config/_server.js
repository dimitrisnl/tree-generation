const port = process.env.PORT || 8898;

module.exports = {
  host: 'localhost',
  port: port,
  historyApiFallback: true,
  open: true,
  hot: true,
};
