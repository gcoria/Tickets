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
    this.reserve = {
       host: 'localhost',
       port: port,
       path: '/reserve',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
    this.confirmation = {
       host: 'localhost',
       port: port,
       path: '/confirm',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
    this.cancel = {
       host: 'localhost',
       port: port,
       path: '/cancel',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
  }
};
