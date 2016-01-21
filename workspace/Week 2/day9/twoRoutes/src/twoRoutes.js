/////
// Exercise 1
// Basic express application with two routes
// var express = require('express');
// var app = express();

// app.get('/', function (request, response) {
// 	message1 = request.query.message1;
// 	response.send(message1);
// });

// app.get('/messages', function (request, response) {
// 	message2 = request.query.message2;
// 	response.send(message2);
// });

// app.listen(3000, function () {
// 	console.log('Example app listening on port 3000!');
// });

/////
// Bonus
var express = require('express');
var app = express();

app.get('/', function (request, response) {
	var responseText = "";
	for(messages in request.query){
		responseText += request.query[messages] + " ";
	}
	response.send(responseText);
});

app.get('/messages', function (request, response) {
	var responseText = "";
	for(messages in request.query){
		responseText += request.query[messages] + " ";
	}
	response.send(responseText);
});

app.listen(3000, function () {
	console.log('Two routers exercise listening on port 3000');
});