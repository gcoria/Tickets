var api = require("./api_request");
var http = require('http');
var request = new api.request();

module.exports = {
  request: function () {
    this.get_travels = function(){
      http.request(request.destinies, function(res){
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
          return chunk;
        });
          res.on('end', function() {
        });
      })
    };
  }
};
