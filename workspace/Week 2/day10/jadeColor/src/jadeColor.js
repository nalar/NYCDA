var express = require('express');
var jade = require('jade');
var fs = require('fs');
var app = express();

app.set('views','./src/views');
app.set('view engine','jade');

app.get('/', function(request, response){
	fs.readFile('./src/colors.json', 'utf8', function(err, rawData){
		if(err){throw err};
		var colorData = JSON.parse(rawData);

		response.render('index', {colorData: colorData});
		console.log("Rendered page for " + request.connection.remoteAddress)
	});
});

var server = app.listen(3000, function () {
	console.log('Jade color exercise listening on port: ' + server.address().port);
});