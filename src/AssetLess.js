const prettier = require("prettier");
const LESSAsset = require('parcel-bundler/src/assets/LESSAsset');

const { writeFile } = require('fs');

class AssetLess extends LESSAsset {
    async load() {
        
        let code = await super.load();

        this.encoding = 'utf-8';
        var config = Object.assign({},await prettier.resolveConfig(this.name));

        config.filepath = this.name;
        
        var prettierSource = prettier.format(
            code,
            config
        );
        if (prettierSource !== code ) {
            new Promise((resolve, reject) => {
                writeFile(this.name, prettierSource, this.encoding, err => {
                if (err) throw err;
                });
            })
        }
        
        return code;
    }
    getParserOptions(){}
}

module.exports = AssetLess;