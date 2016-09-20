#!/usr/bin/env node

const Builder = require("systemjs-builder");
var compressor = require('node-minify');
// SystemJS build options.
var options = {
    normalize: true,
    runtime: false,
    sourceMaps: true,
    sourceMapContents: true,
    minify: false,
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

console.log("Bundling rxjs/* => node_modules/.tmp/");

builder
    .bundle('rxjs', 'node_modules/.tmp/Rx.js', options)
    .then(function() {
        console.log("Minifying...")
        new compressor.minify({
            type: 'uglifyjs',
            fileIn: 'node_modules/.tmp/Rx.js',
            fileOut: 'node_modules/.tmp/Rx.min.js',
            callback: function(err, min){
                console.log("Bundles Rx.js and Rx.min.js complete"); 
                console.log(err);
                //console.log(min); 
            }
        });
    });




