var net = require('net');
var date = new Date();
arr = [];
arr[0] = date.getFullYear();
if (date.getMonth() + 1 < 10) {arr[1] = '0'+date.getMonth().toString()}
          else {arr[1] = date.getMonth() +1};
if (date.getDate() < 10) {arr[2] = '0'+date.getDate().toString()}
          else {arr[2] = date.getDate()};

arr[3] = date.getHours();
arr[4] = date.getMinutes();

var server = net.createServer(function(c) { //'connection' listener
 c.write (arr[0]+'-'+arr[1]+'-'+arr[2]+' '+arr[3]+':'+arr[4] + '\n');

 c.end();
 //c.write (JSON.stringify(arr));
  //c.write (date.getDate().toString());
  // c.pipe(c);
});
server.listen(process.argv[2], function() {
});