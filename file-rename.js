
var fs = require('fs');

fs.rename ('sachi', 'parveen', function(err){
	if(err) throw err;
})