const transformFiles = require('./common');
const SASSAsset = require('parcel-bundler/src/Assets/SASSAsset');

class PrettyAsset extends SASSAsset {
    async transform() {
        transformFiles(this);
    }
}

module.exports = PrettyAsset;