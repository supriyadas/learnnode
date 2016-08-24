$(document).ready(function(){

	$.get("/userlist",function(data){
		var data2={};
		data2.users=data;
		
		// var obj = {people: JSON.parse(text)};
		// var newstr=JSON.stringify(data2);
		// var data3=JSON.parse(newstr);

		var temp=$('#must1').html();
		
		var output=Mustache.render(temp,data2);
        $('#must1').html(output);

	});

});

