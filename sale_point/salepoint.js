var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var api = require("./rest_api/api_request");
var chevalier = new api.request(5100);
var monticas = new api.request(5500);
var async = require('async');
var request = require('request');


var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// lista de paquetes de viajes
app.get('/list_options', function(req, res) {
  var travels = [];
  async.concatSeries([monticas.destinies_url, chevalier.destinies_url], function(url, callback) {
    request(url, function(error, response, html) {
      // Procesamiento de las respuestas, de a una a la vez
      if (response !== undefined)
        travels = travels.concat(JSON.parse(response.body).destinies);
      callback(error, html);
    });
  }, function(err, results) {
    res.render('travels.html.ejs', {layout: false, travels: travels });
  });
});

//reservar paquete de viaje
app.get('/reserve', function(req, res) {
  monticas.reserve.headers["seats"] = req.query.seat;
  var send_reserve = http.request(monticas.reserve, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
    });
      resp.on('end', function() {
      console.log("Reserva Enviada | Respuesta Recibida");
    });
  });
  send_reserve.end();
  res.send('Reserva Finalizada Correctamente');
});

//confirmar paquete previamente reservado
app.get('/confirm', function(req, res) {
  monticas.confirmation.headers["seats"] = req.query.seat;
  var confirm = http.request(monticas.confirmation, function(resp) {
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
  monticas.cancel.headers["seats"] = req.query.seat;
  var cancel_reservation = http.request(monticas.cancel, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
    });
    resp.on('end', function() {
      console.log("Reserva Cancelada | Respuesta Recibida");
    });
  });
  cancel_reservation.end();
});

//Pagina principal
app.get('/', function(req, res) {
  res.render('index.html.ejs', {
  travels: []
  });
});

app.listen(5000, function() {

});
