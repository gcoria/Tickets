var express = require('express');
var app = express();

//routes
var router = express.Router();
var views = __dirname + '/views/';
var info = __dirname + '/data/';
var fs = require("fs");



router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(views + "index.html");
  res.render(views + 'travels.html', {layout: false, data: data});
});

router.get("/companies",function(req,res){
  res.sendFile(views + "companies.html");
});

router.get("/destinations",function(req,res){
  res.sendFile(views + "destinations.html");
});

app.use("/",router);

app.engine('html', require('ejs').renderFile);

app.use("*",function(req,res){
  res.sendFile(views + "404.html");
});

//Rest
var http = require('http');
var data = JSON.stringify({
  'id': '2'
});

var get_travels = {
  host: 'localhost',
  port: '4000',
  path: '/listDestinies',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

var req = http.request(get_travels, function(res) {
  var msg = '';

  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    msg += chunk;
  });
    res.on('end', function() {
  });
});

req.write(data);
req.end();

//reserve
var server = app.listen(5000,function() {

  //var host = server.address().address
  var port = server.address().port

  console.log("Escuchando en http://localhost:%s", port)
});
