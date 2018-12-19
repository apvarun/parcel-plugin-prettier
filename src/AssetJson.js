const transformFiles = require('./common');
const JSONAsset = require('parcel-bundler/src/Assets/JSONAsset');

class PrettyAsset extends JSAsset {
    async transform() {
        transformFiles(this);
    }
}

module.exports = PrettyAsset;