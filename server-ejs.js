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

// lista de paquetes de viajes
app.get('/list_options', function(req, res) {
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

//reservar paquete de viaje
app.get('/reserve', function(req, res) {
  var send_reserve = http.request(get.reserve, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
    });
      resp.on('end', function() {
      console.log("Reserva Enviada | Respuesta Recibida");
    });
  });
  send_reserve.end();
});

//confirmar paquete previamente reservado
app.get('/confirm', function(req, res) {
  var confirm = http.request(get.confirmation, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
    });
     resp.on('end', function() {
      console.log("Confirmar Reserva | Respuesta Recibida");
    });
  });
  confirm.end();
});

//cancelar paquete previamente reservado
app.get('/cancel', function(req, res) {
  var cancel_reservation = http.request(get.cancel, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
    });
    resp.on('end', function() {
      console.log("Reserva Cancelada | Respuesta Recibida");
    });
  });
  cancel_reservation.end();
});

app.get('/', function(req, res) {
  res.render('index.html.ejs', {
  travels: []
  });
});

app.listen(app.get('port'), function() {

});







