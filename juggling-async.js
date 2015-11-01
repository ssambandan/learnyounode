ht = require('http')
var arr = [];
var rock = 0;
var howMany = 0;

for (rock = 0; rock <3; rock++) {
getData (process.argv[rock +2], rock);
};


function getData (path, cnt) {
var i = cnt;
ht.get(path, function(res) {

  res.setEncoding('utf8');
  arr[cnt] = '';
  res.on('data', function (chung) {
  arr[cnt] += chung;
  });
  res.on('end', function () {
	howMany++ ;
	  });



});
}

var soWait = setInterval (waitForDone, 100);

function waitForDone () {
	if (howMany == 3) {
		console.log (arr[0]);
		console.log (arr[1]);
		console.log (arr[2]);
		clearInterval (soWait);
	}
}




