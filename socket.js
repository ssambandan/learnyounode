var net = require('net');
var client = net.connect({port: 8124},
    function() { //'connect' listener
  console.log('connected to server!');
  // client.write(this.client);
});
client.on('data', function(data) {
  arr = (JSON.parse(data));
  console.log (arr[0]+'-'+arr[1]+'-'+arr[2]+' '+arr[3]+':'+arr[4]);
});
client.on('end', function() {
  console.log('disconnected from server');
});