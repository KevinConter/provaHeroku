var bind = require('bind');
var express = require('express');

var app = express();

app.set("port",(process.env.PORT || 8848));

app.get("/",function(req,res){
	bind.toFile("es.tpl",
		{str: "Ciao a caso"},
		function(data){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.end(data);
		}
	);
});

app.listen('8848','127.0.0.1');

