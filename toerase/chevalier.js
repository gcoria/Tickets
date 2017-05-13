var classes = require("./company");
var fs = require("fs");
var company = new classes.company("Chevalier", 5100);
var info = __dirname + '/data/';

//api
company.server.get('/list_options', function (req, res) {
  fs.readFile(info + "destinies_2.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

company.server.get('/reserve', function (req, res) {
  console.log("*******Reserve Flight*******");
  res.sendStatus(200);
})

company.server.get('/confirm', function (req, res) {
  console.log("*******Confirm flight*******");
  res.sendStatus(200);
})

company.server.get('/cancel', function (req, res) {
  console.log("*******cancel flight*******");
  res.sendStatus(200);
})

//server de la
var server = company.server.listen(company.port, function() {
  console.log(company.name, company.port)
});