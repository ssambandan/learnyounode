var fs = require('fs');
var path = require('path');
var filter = '.' + process.argv[3];


function callback() { fs.readdir(process.argv[2], function (err, arr) {
    if (err) throw err;
   
for (var i=0; i < arr.length; i++) {
	if (path.extname(arr[i]) == filter) console.log(arr[i]);

}

    
	});

}

callback ();
