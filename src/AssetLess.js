const transformFiles = require('./common');
const LessASSET = require('parcel-bundler/src/Assets/LESSAsset');

class PrettyAsset extends LessASSET {
    async transform() {
        transformFiles(this);
    }
}

module.exports = PrettyAsset;