/////
// Promise is a module for nodeJS that let's you create
// easy to read asynchronous code. You no longer have to
// use a callback parameter in your async functions.

/////
// Read file example

// Require modules
var fs = require('fs');				// Require fs
var Promise = require('promise');	// Require promise

// "De-node-ify" fs.readfile, this adds a callback to any
// calls to the function.
var readFile = Promise.denodeify(fs.readFile);					// De-node-ify fs.readFile

readFile('./sample.txt', 'utf8').then(							// Call readfile with .then appended
	function(result) {											// If result then
		console.log("file read successfully: " + result);		// Log the result
	},
	function(error) {											// If error then
		console.log("looks like an error occurred: " + error);	// Log the error
	}
);

/////
// Custom promise example

var Promise = require('promise');			// Require promise
											// Define a new promise with a resolve and reject
var contrivedFunctionPromise = new Promise(function (resolve, reject) { 
	function contrivedFunction() {			// Define the function contrivedFunction within in the promise
		return Math.random() < .5;			// Simple random variable check
	}

	if (contrivedFunction()) {				// If the outcome of te function is true
		resolve("success!");				// Call resolve with "sucess"
	} else {
		reject("much failure very error");	// Call reject with "much failure very error"
	}
});

contrivedFunctionPromise.then(console.log, console.log);	// Call the console.log function for both resolve and reject

/////
// Chained then call example
var fs = require('fs');				// Require filesystem i/o
var Promise = require('promise');	// Require promise

var readFile = Promise.denodeify(fs.readFile); 	// Make a promise out of fs.readfile

readFile('./sample.json', 'utf8')				// call readFile for sample.json
	.then(JSON.parse, console.log)				// Then parse the json file
	.then(function (parsedResult) {				// Then do something with the parsed result
		console.log("printing out a specific value: " + parsedResult.sample_key);
	}
);

/////
// Anatomy of a promise
var promise = new Promise(function(resolve, reject)
{
	// Do something
	
	reject(error);		// If there was an error call reject
	resolve(result);	// Pass the result to resolve
});

/////
// Calling a promise
promise.then(resolve, reject);

function resolve(results){
	// Do something with the result
};

function reject(error){
	// Do something with the error
};

/////
// Exercise 1
// Change this function in to an promise