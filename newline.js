var fs = require('fs');

function callback () {
	fs.readFile(process.argv[2], function(err, data) {
      bufstring = data.toString().split('\n').length -1;
      console.log(bufstring);
	});
}

callback();