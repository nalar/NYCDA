// Set the several requires
var express = require('express');
var jade = require('jade');

// Set up express
app = express();
app.set('views', './src/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/views'));

// Basic route
app.get('/', function(request, response) {
	response.render('index');
});

// Make the server listen
var server = app.listen(3000, function() {
	console.log('Cookies! running on localhost:' + server.address().port);
});