var fs=require("fs");
var exp = require('express');
var connect = require('connect');
fs.open("foo.txt","r", function(err,handle){

	var b=new Buffer(1000);

	fs.read(handle,b,0,1000,null,function(err,bytes_read){
		console.log(b.toString("utf8",0,bytes_read));
		fs.close(handle);
	});

});
