const transformFiles = require('./common');
const HTMLAsset = require('parcel-bundler/src/Assets/HTMLAsset');

class PrettyAsset extends HTMLAsset {
  async transform() {
    transformFiles(this, 'html');
  }
}

module.exports = PrettyAsset;
