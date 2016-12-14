var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.set('port', (5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var data = JSON.stringify({
  'id': '2'
});


var get_travels = {
  host: 'localhost',
  port: '4000',
  path: '/listDestinies',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

var travels;
var req = http.request(get_travels, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
  	console.log(chunk);
  	return chunk;
  });
    res.on('end', function() {
  });
});

console.log(travels);
req.end();

app.get('*', function(req, res){
  var travels = [];
  res.render('index.html.ejs', {
	travels: travels
  });
});

app.listen(app.get('port'), function() {
	
});