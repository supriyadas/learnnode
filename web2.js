var http = require('http');

function webfunction(req,res){
	var body="hey, thanks for calling";
	var bd_len=body.length;

	res.writeHead(200,{
		'Content-Type':"text/plain",
		'Content-Length':bd_len
	});	

	console.log("I got request");
	res.end(body);

}

var s=http.createServer(webfunction);
 s.listen(8082);