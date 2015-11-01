var fs = require('fs');
var path = require('path');
var readpath = 'tmp/gigamon.txt'
var options = {flags: 'r+'};
var writepath = 'tmp/output.txt'


var rdstrm = fs.createReadStream(readpath);
var wrtstrm = fs.createWriteStream(writepath, options);

rdstrm.pipe(wrtstrm);
