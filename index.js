const mkdirp = require('mkdirp');
const jsonfile = require('jsonfile');
const constFile = require('./src/const');

mkdirp.sync(constFile.cacheDir);

const PRETTIER_ASSET_EXTENSIONS = {
    Html:["html"],
    Js:["js","jsx","ts","tsx"],
    Css:["css"],
    Less:["less"],
    Sass:["scss"],
    Json:["json"],
    Graphql:["graphql"]
}

module.exports = function (bundler) {
    jsonfile.writeFileSync(constFile.cacheFile, {});

    Object.entries(PRETTIER_ASSET_EXTENSIONS).map(function(val,index){
        val[1].map(function(fileName){
            bundler.addAssetType(fileName, require.resolve(`./src/Asset${val[0]}.js`));
        });
    });

    bundler.on('bundled', () => {
        let cache;
        cache={};
        try {
            cache = jsonfile.readFileSync(constFile.cacheFile);
        } catch (e) {
            cache = {};
        }
        cache.log = cache.log || [];
        if (cache.log.length) {
            bundler.logger.clear();
        }
        cache.log.forEach(element => {
            bundler.logger.write(element);
        });
        
        jsonfile.writeFileSync(constFile.cacheFile, {});
    });
};