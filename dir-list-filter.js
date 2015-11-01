

var fs = require('fs');
var path = require('path');

module.exports = function dirlist(dir, filter, callback) { fs.readdir (dir, function (err, arr) {
    if (err) return callback(err);
   
   var list = [];
   var index = 0;
for (var i=0; i < arr.length; i++) {
	if (path.extname(arr[i]) == '.' + filter) {
		list[index] = arr[i];
        ++ index;
    }
}
    
     callback(null, list);

    
	});

}

