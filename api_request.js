var data = JSON.stringify({ 'id': '2' });

module.exports = {
  request: function () {
    this.destinies = {
       host: 'localhost',
       port: '5500',
       path: '/list_options',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
    this.reserve = {
       host: 'localhost',
       port: '5500',
       path: '/reserve',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
    this.confirmation = {
       host: 'localhost',
       port: '5500',
       path: '/confirm',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
    this.cancel = {
       host: 'localhost',
       port: '5500',
       path: '/cancel',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
  }
};
