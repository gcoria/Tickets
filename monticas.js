var classes = require("./company");
var fs = require("fs");
var company = new classes.company("Chevalier", 5500);
var info = __dirname + '/data/';

//api
company.server.get('/listDestinies', function (req, res) {
  fs.readFile(info + "destinies.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

company.server.get('/reserve', function (req, res) {
  console.log("*******Request Received*******");
})

company.server.get('/confirm', function (req, res) {
  console.log("*******Request Received*******");
})

company.server.get('/cancel', function (req, res) {
  console.log("*******Request Received*******");
})

//server de la
var server = company.server.listen(company.port, function() {
  console.log(company.name, company.port)
});
