// Read in several files
// Once all complete
// Do something

// var fs = require('fs');

// var numFilesRead = 0;

// fs.readFile('./resources/map1.txt','utf8', function(err, data){
// 	console.log("Read map1.txt");
// 	numFilesRead++;
// 	if(numFilesRead === 3){
// 		console.log("Done!")
// 	}
// });

// fs.readFile('./resources/map2.txt','utf8', function(err, data){
// 	console.log("Read map2.txt")
// 	numFilesRead++;
// 	if(numFilesRead === 3){
// 		console.log("Done!")
// 	}
// });

// fs.readFile('./resources/map3.txt','utf8', function(err, data){
// 	console.log("Read map3.txt")
// 	numFilesRead++;
// 	if(numFilesRead === 3){
// 		console.log("Done!")
// 	}
// });

// Using a while loop won't work because a while loop is not async

var fs = require('fs');		// Require the filesystem i/o module
var numFilesRead = 0;		// Set the number of files read to 0

fs.readFile('./resources/map1.txt','utf8', function(err, data){		// Read a file and pass its data to the anonymous function
	console.log("Read map1.txt");									// Log completed reading
	complete();														// Call the complete() function, but don't pass anything on.
});

fs.readFile('./resources/map2.txt','utf8', function(err, data){
	console.log("Read map2.txt")
	complete();
});

fs.readFile('./resources/map3.txt','utf8', function(err, data){
	console.log("Read map3.txt")
	complete();
});

function complete(){
	numFilesRead++;
	if (numFilesRead === 3) {
		console.log('it\'s ready');
		console.log('do some work');
	}
};


