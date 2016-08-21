var fs=require("fs");

fs.readFile("foo.txt", "utf8", function(error, data){

	console.log(data);
});