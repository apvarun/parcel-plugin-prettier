const transformFiles = require('./common');
const JSONAsset = require('parcel-bundler/src/Assets/JSONAsset');

class PrettyAsset extends JSONAsset {
  async transform() {
    transformFiles(this, 'json');
  }
}

module.exports = PrettyAsset;
