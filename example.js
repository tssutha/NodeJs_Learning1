/*
	My first Node.Js Project
	Date : 1st June 2014
*/

//Load the Http Module
var http = require('http');

/*
Create the Web Server and get the request (req) and response(res) objects 
Handle the request and response from the client 
Call end() to close sending the response to the client 
Call listen() with a port number to activate the listing process
*/
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	console.log(req.url);
	
	if(req.url == '/')
	{
		res.write('Welcome to NodeSchool Singapore\n');
		res.end('Hello NodeJs World\n');
	}
	else if(req.url == '/about')
	{
		res.write('This page gives everything about NodeSchool Singapore Event\n');
		res.end('Hello NodeJs World\n');
	}
	else if(req.url == '/admin')
	{
		res.write('Welcome to Admin Page\n');
		res.end('Hello NodeJs World\n');
	}
	else
	{
		res.write('Page not found\n');
		res.end('Hello NodeJs World\n');
	}
}).listen(8084,'127.0.0.1');
console.log('Server Running @ http://127.0.0.1:8084/');


