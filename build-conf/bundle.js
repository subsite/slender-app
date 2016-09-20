#!/usr/bin/env node

const Builder = require("systemjs-builder");

var outpath = 'local/assets/js/';

// SystemJS build options
var options = {
    normalize: true,
    runtime: false,
    sourceMaps: true,
    sourceMapContents: true,
    minify: true,
    mangle: false
};
var builder = new Builder('./');
builder.config({
    paths: {
        "n:*": "node_modules/*",
        "rxjs/*": "node_modules/rxjs/*.js",
    },
    map: {
        "rxjs": "n:rxjs",
    },
    packages: {
        "rxjs": {main: "Rx.js", defaultExtension: "js"},
    }
});

console.log("Bundling rxjs/* => "+outpath);

builder.bundle('rxjs', outpath+'Rx.min.js', options);




