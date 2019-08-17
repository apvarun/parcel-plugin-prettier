const transformFiles = require('./common');
const MarkdownAsset = require('parcel-bundler/src/assets/MarkdownAsset');

class AssetMd extends MarkdownAsset {
  async transform() {
    transformFiles(this, 'remark');
  }
}

module.exports = AssetMd;
