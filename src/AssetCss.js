const prettier = require("prettier");
const CSSAsset = require('parcel-bundler/src/assets/CSSAsset');

const { writeFile } = require('fs');

class AssetCss extends CSSAsset {
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

module.exports = AssetCss;