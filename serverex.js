/*
	Server Object using NodeJS Net module
*/

var net = require('net');
var serverPort = 9099;

var server = net.createServer(function(client){
	console.log('client connected');
	console.log('Client IP address: ' + client.remoteAddress);
	console.log('Is IPv6 : ' + net.isIPv6(client.remoteAddress));
	console.log('total server connection: ' + server.connections);
	
	//Waiting for the data from client
	client.on('data', function(data){
		console.log('received data: ' + data.toString());
		//write data to client socket
		client.write('Hello From Server');
	});
});

server.on('error', function(err){
	console.log(err);
	server.close();
});

server.listen(serverPort, function(){
	console.log('server started on port' + serverPort);
});