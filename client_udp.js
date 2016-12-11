// NOTE: the port is different
var host = "127.0.0.1", port = 33334;

var dgram = require( "dgram" );

var client = dgram.createSocket( "udp4" );

client.on( "message", function( msg, rinfo ) {
    console.log( "The packet came back" );
});

// client listens on a port as well in order to receive ping
client.bind( port, host );

// proper message sending
// NOTE: the host/port pair points at server
var message = new Buffer( "My KungFu is Good!" );
client.send(message, 0, message.length, 33333, "127.0.0.1" );