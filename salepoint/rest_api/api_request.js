var data = JSON.stringify({ 'id': '2' });

module.exports = {
  request: function (port) {
    this.destinies = {
       host: 'localhost',
       port: port,
       path: '/list_options',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
    this.destinies_url = 'http://localhost:' + port +'/list_options',
    this.reserve = {
       host: 'localhost',
       port: port,
       path: '/reserve',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length,
         'seats': 0
       }
    };
    this.confirmation = {
       host: 'localhost',
       port: port,
       path: '/confirm',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length,
         'seats': 0
       }
    };
    this.cancel = {
       host: 'localhost',
       port: port,
       path: '/cancel',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length,
         'seats': 0
       }
    };
  }
};
