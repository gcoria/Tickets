// NOTE: the port is different
var sale_point = require("./peer")

var client = new sale_point.node("127.0.0.1", 33334);

client.channel.on( "message", function( msg, rinfo ) {
    console.log( "The packet came back" );
});

// client listens on a port as well in order to receive ping
client.channel.bind( client.port, client.host );

// proper message sending
// NOTE: the host/port pair points at server
var message = new Buffer( "My KungFu is Good!" );

client.channel.send(message, 0, message.length, 33333, "127.0.0.1" );