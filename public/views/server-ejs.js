var http = require('http');


var data = JSON.stringify({'id': '2'});


var get_travels = {
  host: 'localhost',
  port: '5500',
  path: '/listDestinies',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};


function list_travels(){
  var msg = [];
  var req = http.request(get_travels, function(res) {
  
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      msg = chunk;
    });
      res.on('end', function() {
    });
  });
  
  req.write(data);
  req.end();
  return msg;
}
