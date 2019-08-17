const transformFiles = require('./common');
const JSAsset = require('parcel-bundler/src/Assets/JSAsset');

class PrettyAsset extends JSAsset {
  async transform() {
    transformFiles(this, 'babel');
  }
}

module.exports = PrettyAsset;
