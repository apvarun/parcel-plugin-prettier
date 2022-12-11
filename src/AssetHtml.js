const transformFiles = require('./common');
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

class PrettyAsset extends HTMLAsset {
  async transform() {
    transformFiles(this, 'html');
  }
}

module.exports = PrettyAsset;
