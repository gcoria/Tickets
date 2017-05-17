/*
 * Dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var api = require("./rest_api/api_request");

var salepoint_api = require("./rest_api/salepoint_api"); //Para los metodos

var serverChevalier = new api.request(5100);
var serverMonticas = new api.request(5500);
var async = require('async');
var request = require('request');

var app = express();

app.set('views', __dirname + '/views/salepointChevalierViews');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// lista de paquetes de viajes
app.get('/list_options', function(req, res) {
  var travels = [];
  async.concatSeries([serverMonticas.destinies_url, serverChevalier.destinies_url], function(url, callback) {
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
  serverMonticas.reserve.headers["seats"] = req.query.seat;
  var send_reserve = http.request(serverMonticas.reserve, function(resp) {
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
  serverMonticas.confirmation.headers["seats"] = req.query.seat;

  salepoint_api.confirmTravels(req, res);

  var confirm = http.request(serverMonticas.confirmation, function(resp) {
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
  serverMonticas.cancel.headers["seats"] = req.query.seat;
  var cancel_reservation = http.request(serverMonticas.cancel, function(resp) {
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
