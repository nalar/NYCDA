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
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

function makeResponse(request, response, callback){
	var responseText = "";
	if(request.method === "GET"){
		requestData = request.query;
	};
	if(request.method === "POST"){
		requestData = request.body;
	}

	for(messages in requestData){
		responseText += requestData[messages] + " ";
	}
	response.send(responseText + "\n");
};

app.get('/', function (request, response) {
	makeResponse(request, response);
});

app.get('/messages', function (request, response) {
	makeResponse(request, response);
});

app.post('/messages', function (request, response) {
	makeResponse(request, response);
});

app.listen(3000, function () {
	console.log('Two routes exercise with GET and POST support started on port 3000');
});

