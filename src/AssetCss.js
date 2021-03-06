const transformFiles = require('./common');
const CSSAsset = require('parcel-bundler/src/Assets/CSSAsset');

class PrettyAsset extends CSSAsset {
  async transform() {
    transformFiles(this, 'css');
  }
}

module.exports = PrettyAsset;
