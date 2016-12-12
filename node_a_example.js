var sale_point = require("./peer")

var server = new sale_point.node("127.0.0.1", 33333);

server.channel.on( "message", function( msg, rinfo ) {
    console.log( rinfo.address + ':' + rinfo.port + ' - ' + msg );
    server.channel.send( msg, 0, msg.length, rinfo.port, rinfo.address );
});

server.channel.bind( server.port, server.host );


