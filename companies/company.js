var express = require('express');
var company = express();

//routes
var router = express.Router();
var fs = require("fs");

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

company.use("/",router);

//api
company.get('/listDestinies', function (req, res) {
  fs.readFile(__dirname + "/" + "destinies.json", 'utf8', function (err, data) {
    res.end( data );
  });
})

var server = company.listen(4000,function() {

  //var host = server.address().address
  var port = server.address().port

  console.log("Monticas escuchando en http://localhost:%s", port)
});
