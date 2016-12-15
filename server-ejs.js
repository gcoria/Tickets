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

// reserve
var get_reserve = {
  host: 'localhost',
  port: '5500',
 //completar...
};

// confirm
var get_confirm = {
  host: 'localhost',
  port: '5500',
 //completar...
};

// cancel
var get_cancel = {
  host: 'localhost',
  port: '5500',
 //completar...
};

var travels = [];

// var data = JSON.stringify({
//   'id': '2'
// });

var req = http.request(get_travels, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
  	travels = chunk;
  });
    res.on('end', function() {
  });
});
req.write(data)
req.end();

app.get('/message', function(req, res) {
  res.render('travels.html.ejs', {layout: false, travels: JSON.parse(travels).destinies});
});

app.get('/', function(req, res) {
  res.render('index.html.ejs', {
  travels: []
  });
});

app.listen(app.get('port'), function() {

});







