var express = require('express');
var jade = require('jade');
var fs = require('fs');
var app = express();

app.set('views','./src/views');
app.set('view engine','jade');

app.get('/', function(request, response){
	fs.readFile('./src/countries.json', 'utf8', function(err, rawData){
		if(err){throw err};
		var countryData = JSON.parse(rawData);

		response.render('index', {countryData: countryData});
	});
});

var server = app.listen(3000, function () {
	console.log('Intermediate jade example listening on port: ' + server.address().port);
});