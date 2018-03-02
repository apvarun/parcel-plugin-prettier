const Bundler = require('parcel-bundler');
const PluginPrettier = require('../index');

let bundler = new Bundler('./examples/index.html', {
    watch: true
});

PluginPrettier(bundler);

bundler.serve();