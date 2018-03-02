const prettier = require("prettier");
const { Asset } = require('parcel-bundler');
const JSONAsset = require('parcel-bundler/src/assets/JSONAsset');

const { writeFile, readFileSync } = require('fs');

class AssetJson extends JSONAsset {
    async load() {
        
        let code = await super.load();

        this.encoding = 'utf-8';
        const file = readFileSync(this.name, this.encoding );
        var config = Object.assign({},await prettier.resolveConfig(this.name),{parser: "json"});
        console.log(config);
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