const prettier = require("prettier");
const { Asset } = require('parcel-bundler');
const SASSAsset = require('parcel-bundler/src/assets/SASSAsset');

const { writeFile, readFileSync } = require('fs');

class AssetSass extends SASSAsset {
    async load() {
        
        let code = await super.load();

        this.encoding = 'utf-8';
        const file = readFileSync(this.name, this.encoding );
        var config = Object.assign({},await prettier.resolveConfig(this.name),{parser: "scss"});
        
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

module.exports = AssetSass;