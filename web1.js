var http = require('http');

var s=http.createServer(function(req,res){

	console.log("I got request");
	res.end("hey, thanks for calling");

});
 s.listen(8082);