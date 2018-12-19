const prettier = require("prettier");
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

const { writeFile } = require('fs');

class AssetHtml extends HTMLAsset {
    async load() {
        
        let code = await super.load();

        this.encoding = 'utf-8';
        var config = Object.assign({}, prettier.resolveConfig.sync(this.name));

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
}

module.exports = AssetHtml;