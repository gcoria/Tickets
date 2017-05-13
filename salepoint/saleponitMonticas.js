/*
 * Dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var api = require("./rest_api/api_request");
var serverChevalier = new api.request(5100);
var serverMonticas = new api.request(5500);
var async = require('async');
var request = require('request');

var app = express();

// app.set('views', __dirname + '/views/salepointArgviews');
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.use(express.static(__dirname + '/public'))