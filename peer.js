var dgram = require( "dgram" );

module.exports = {
  node: function (host, port) {
    this.channel = dgram.createSocket( "udp4");
    this.host    = host,
    this.port    = port;
  }
};


