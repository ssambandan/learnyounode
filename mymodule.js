
var mymodule = require('./dir-list-filter.js');

function print (err, data) {
    if (err) throw error;
    for (var i=0; i < data.length; i++)
	console.log (data[i]);
}

mymodule (process.argv[2], process.argv[3], print);