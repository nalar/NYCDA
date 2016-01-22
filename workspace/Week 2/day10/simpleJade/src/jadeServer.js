var fs = require('fs');
var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(request, response){
	fs.readFile('./exampleData.txt','utf8', function(err, data){
		if(err){
			throw err;
		}
		response.render('index', {dataFromRead: data});
	});
});

var server = app.listen(3000, function(){
	console.log('Example app listening on port: ' + server.address().port);
});