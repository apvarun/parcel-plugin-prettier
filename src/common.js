const prettier = require("prettier");
const { readFile, writeFile } = require('@parcel/fs');

async function transformFiles(asset) {
    let sourceFiles = [asset.name];
    
    //Less files need to include deps as well or only the main file is treated (there's probably a better way to do this)
    if(asset.type === "css")
        sourceFiles = sourceFiles.concat(Array.from(asset.dependencies, ([key, value]) => value.name));
        
    return sourceFiles.forEach(source => prettify(source, asset.encoding));
}

async function prettify(source, encoding) {
    if(!source)
        return;

    let code = await readFile(source, encoding);

    var config = Object.assign({}, await prettier.resolveConfig(source));

    config.filepath = source;

    var prettierSource = prettier.format(
        code,
        config
    );

    if (prettierSource !== code) {
        new Promise(() => {
            writeFile(source, prettierSource, encoding, err => {
                if (err) throw err;
            });
        })
    }

    return code;
}

module.exports = transformFiles;