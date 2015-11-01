ht = require('http')
fs = require('fs')
var writepath = 'tmp/output.txt'
var wrtstrm = fs.createWriteStream(writepath)
var options = {port: 8080,
               method: 'POST'}

req = ht.request (options, function(res) {
chunk = '';
res.setEncoding ('utf8');

res.on ('data', function (chunk) {
console.log (chunk);
});
});

//req.write ('Hi, Sachi here');
req.write('get me')

req.end();