var data = JSON.stringify({ 'id': '2' });

module.exports = {
  request: function () {
    this.destinies = {
       host: 'localhost',
       port: '5500',
       path: '/listDestinies',
       method: 'GET',
       headers: {
         'Content-Type': 'application/json; charset=utf-8',
         'Content-Length': data.length
       }
    };
  }
};
