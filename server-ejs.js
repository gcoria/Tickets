var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var api = require("./api_request");
var get = new api.request();

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

app.get('/message', function(req, res) {
  var travels = [];
  var get_travels = http.request(get.destinies, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
      travels = chunk;
    });
      resp.on('end', function() {
      res.render('travels.html.ejs', {layout: false, travels: JSON.parse(travels).destinies });
    });
  });
  get_travels.end();
});

app.get('/', function(req, res) {
  res.render('index.html.ejs', {
  travels: []
  });
});

app.listen(app.get('port'), function() {

});







