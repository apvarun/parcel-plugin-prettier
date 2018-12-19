const prettier = require("prettier");
const JSONAsset = require('parcel-bundler/src/assets/JSONAsset');

const { writeFile } = require('fs');

class AssetJson extends JSONAsset {
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

module.exports = AssetJson;