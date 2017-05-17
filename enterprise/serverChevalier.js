var enterprise    = require("./company/company");
var fs            = require("fs");
var company       = new enterprise.company("serverChevalier", 5100);
var info          = __dirname + '/data/';
var EnterpriseApi = require("./company/enterprise-api");


//api
company.server.get('/list_options', function (req, res) {
  fs.readFile(info + "destinies_2.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

company.server.get('/reserve', function (req, res) {
  console.log("*******Reserve Flight*******");
  var reservation = EnterpriseApi.buildReservation(req, res, "timestamp");
  console.log(reservation);
  res.sendStatus(200);
})

company.server.get('/confirm', function (req, res) {
  console.log("*******Confirm flight*******");
  var confirmation = EnterpriseApi.buildConfirmation(req, res, "timestamp");
  console.log(confirmation);
  res.sendStatus(200);
})

company.server.get('/cancel', function (req, res) {
  console.log("*******cancel flight*******");
  var cancelation = EnterpriseApi.buildCancelation(req, res, "timestamp");
  console.log(cancelation);
  res.sendStatus(200);
})

//server 
var server = company.server.listen(company.port, function() {
  console.log(company.name, company.port)
});