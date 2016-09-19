#!/usr/bin/env node

/*
* After merge, run this script before nom install:
*
* $ npm run build-conf 
*/

var mergeJSON = require("merge-json") ;
var fs = require("fs");


var dst = fs.readFileSync('./package.json');
var src = fs.readFileSync('./app/build-conf/package.json', 'utf-8');

var other_files = [ 'systemjs.config.js', 'tsconfig.json', 'typings.json'];

// Merge package.json
var result = mergeJSON.merge(JSON.parse(dst), JSON.parse(src)) ;
result = JSON.stringify(result, null, 4);
fs.writeFile("./package.json", result, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("MERGE ./app/build-conf/package.json => ./package.json ");
}); 

// Copy (overwrite) other files
other_files.forEach(function(file){
  fs.createReadStream('./app/build-conf/'+file).pipe(fs.createWriteStream('./'+file));
  console.log('COPY ./app/build-conf/'+file+' => ./'+file);
});



