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
var express = require('express');						// Require express
var bodyParser = require('body-parser');				// Require bodyParse
var app = express();									// define app is express
app.use(bodyParser.urlencoded({ extended: true }));		// tell app (express) to use bodypasrser

function makeResponse(request, response, callback){		// Function that prepares the response
	var responseText = "";								// Set the response text to empty
	if(request.method === "GET"){						// If the request method is GET
		requestData = request.query;					// Data can be found in request.query
	};
	if(request.method === "POST"){						// If the request method is POST
		requestData = request.body;						// Data can be found in request.body
	}

	for(messages in requestData){						// For parameter in the query
		responseText += requestData[messages] + " ";	// Add the value to the response tekst
	}
	response.send(responseText + "\n");					// Send the response with a new line break
};

app.get('/', function (request, response) {				// On a get request for /
	makeResponse(request, response);					// Call makeResponse with request and response
});

app.get('/messages', function (request, response) {		// On a get request for /messages
	makeResponse(request, response);
});

app.post('/messages', function (request, response) {	// On a post request for /messages
	makeResponse(request, response);
});

app.listen(3000, function () {
	console.log('Two routes exercise with GET and POST support started on port 3000');
});

