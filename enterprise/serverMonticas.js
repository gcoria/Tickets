var enterprise = require("./company/company");
var fs = require("fs");

var company = new enterprise.company("serverMonticas", 5500);
var info = __dirname + '/data/';

var plane_1 = 200;
var plane_2 = 300;
var plane_3 = 400;

//api
company.server.get('/list_options', function (req, res) {
  fs.readFile(info + "destinies.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

company.server.get('/reserve', function (req, res) {
  var seats = req.headers.seats;
  console.log("*******Reserve Flight*******");
  console.log("Asientos a reservar: " + seats);
  console.log("Disponibles: " + plane_1);
  console.log("Reserva Posible: " + (plane_1 > seats));
  res.sendStatus(200);
})

company.server.get('/confirm', function (req, res) {
  var seats = req.headers.seats;
  console.log("*******Confirm flight*******");
  console.log("Asientos Confirmados: " + seats);
  console.log("Disponibles: " + plane_1);
  plane_1 -= seats;
  console.log("Confirmacion Posible: " + (plane_1 > seats));
  res.sendStatus(200);
})

company.server.get('/cancel', function (req, res) {
  var seats = req.headers.seats;
  console.log("*******Reservas Cancelada*******");
  console.log("Asientos: " + seats);
  console.log("Disponibles: " + plane_1);
  plane_1 = parseInt(plane_1) + parseInt(seats);
  console.log("Cancelacion, Asientos Disponibles: " + plane_1 );
  res.sendStatus(200);
})

//sale point port
var server = company.server.listen(company.port, function() {
  console.log(company.name, company.port)
});