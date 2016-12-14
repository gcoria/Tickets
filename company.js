var express = require('express');
var fs = require("fs");

module.exports = {
  company: function (name, port) {
    this.server  = express();
    this.name    = name,
    this.port    = port;
    this.router  = express.Router();
    this.router.use(function (req,res,next) {
      console.log("/" + req.method);
      next();
    });
    this.server.use("/", this.router);
  }
};
