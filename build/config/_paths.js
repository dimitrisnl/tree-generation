const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '../..', dir);
}

module.exports = {
  extensions: ['.js'],
  alias: {
    components: resolve('src/components'),
    containers: resolve('src/containers'),
    utils: resolve('src/utils'),
  },
};
