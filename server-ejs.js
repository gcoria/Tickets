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
  port: '5500',
  path: '/listDestinies',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

var travels = [];
var data = JSON.stringify({
  'id': '2'
});
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
req.write(data)
req.end();

app.get('/', function(req, res) {
  var travels = [];
  res.render('index.html.ejs', {
  travels: travels
  });
});

app.get('/message', function(req, res) {
  console.log("Lista")
  var travels = [];
  res.render('index.html.ejs', {
  travels: travels
    // Run your LED toggling code here
  });
});

app.get('*', function(req, res){
  // console.log("Error 404");
  res.render('404.html.ejs');
});


app.listen(app.get('port'), function() {

	
});