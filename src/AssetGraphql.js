const transformFiles = require('./common');
const GraphqlAsset = require('parcel-bundler/src/Assets/GraphqlAsset');

class PrettyAsset extends GraphqlAsset {
  async transform() {
    transformFiles(this, 'graphql');
  }
}

module.exports = PrettyAsset;
