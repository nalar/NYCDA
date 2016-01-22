var express = require('express');
var bodyParser = require('body-parser');
var jade = require('jade');

var app = express();
app.set('views','./src/views');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response){
	var responseText = "";
	for(messages in request.query){
		responseText += request.query[messages] + " ";
	}
	response.send(responseText);
});

app.post('/post', function(request, response){
	for(messages in request.body){						// For parameter in the query
		responseText += request.body[messages] + " ";	// Add the value to the response tekst
	}
	response.send(responseText + "\n");	
});

app.get('/params/:first/:second', function(request, response){
	firstPath = request.params.first;
	secondPath = request.params.second;
	response.send(firstPath + " " + secondPath);
});

app.get('/jade', function(request, response){
	response.render('index');
});

app.get('/redirect', function(request, response){
	response.redirect('/');
});

var server = app.listen(3000, function () {
	console.log('More routing examples listening on port 3000.');
});