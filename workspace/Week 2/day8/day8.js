// NodeJS is a asynchronous, event driven, single threaded javascript framework
// Special because everything is run in interpreter
// Parts are written in C++ to connect to the kernel (low level stuff)
// 
// NodeJS works with a queue of tasks
// 		   .
// 		  / \
// 		 /   \
// 		/_____\
// 		|task1|
// 		|task2|
// 		|task3|
// 		+-----+
// 		
// 		While task1 is busy, nodeJS will continue with task2


////////////////////////////////////////////////
// Calbacks
function doSomething(parameters, callback){
	// do some work
	callback();
}

////////////////////////////////////////////////
// Callback Example
$("#element").click(function() {
	// Perform an action
	alert("You clicked a button");
});

////////////////////////////////////////////////
// Callback Example 2
// Open a new get data from your server
$.get("url", function(data, status) {
	// Render new data
	alert("The current status is" + status)
});

////////////////////////////////////////////////
// Callback Example 3
// Read data from a file and do something with it
fs.readFile("./day8.js", function(contents){
	// Process data in the file
});

////////////////////////////////////////////////
// Simplest Sever Example
var express = require("express");							// Require package express
var app = express();										// Define that we will be using express as app

app.get("/", function(request, response){					// On a get request do something with the request and response
	respond.send("Your very first server. Good work!");		// Send a response with a string as context
});

var server = app.listen(3000);								// Listen on port 3000

////////////////////////////////////////////////
// NPM Cheatsheet
// npm ls                     # list all locally installed modules
// npm ls -g                  # list all globally installed modules
// npm ls -g --depth 0        # list all globally installed modules (top level only)
// npm install                # install all the node modules listed in your package.json file
// npm install express        # install the express module into your local directory
// npm install express --save # install the express module into your local directory and update your package.json file to show it as a dependency
// npm uninstall express      # remove the express module
// npm install pm2 -g         # install the pm2 module globally
// npm init                   # interactive tool to create a package.json file

////////////////////////////////////////////////
// Reading Files Example
var fs = requre("fs")										// Require fs (filesystem) module

fs.readFile("../sample.txt", function (err, data) {			// Read file (location, function)
	if(err){												// If there's an error
		throw err;											// Throw an error
	}

	var text = data.toString();								// text is the data converted to a string
	console.log(text);										// console log the text
});															// end

////////////////////////////////////////////////
// Writing Files Example
var fs = requre("fs")										// Require fs (filesystem) module

var fileContents = "hi!";									// Give a string for fileContents

fs.writeFile("sample.txt", fileContents, function (err) {	// Write file (name, contents, function for error)
	if(err){												// If theres an error
		throw err;											// Throw the error
	}
});															// end