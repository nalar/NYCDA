/////
// This is the non-async function
// var fs = require('fs');

// function readJSON(targetJSON){
// 	var importedJSON = JSON.parse(
// 		fs.readFileSync(targetJSON, 'utf8')
// 		);
// 	return(importedJSON);
// };

// module.exports = {
// 	jsObject: readJSON,
// };

var fs = require('fs');											// Require the filesystem i/o

function readAndParse(targetJSON, onComplete){					// define function readAndParse with arguments target and callback
		fs.readFile(targetJSON, 'utf8', function(err, data) {	// call the fs.readfile function with utf8 encoding and anonymous function as call back
			if(err){											// If theres an error
				throw err;										// throw it
			};
			var importedJSON = JSON.parse(data);				// parse the JSON data and save as importedJSON var
			onComplete(importedJSON);							// pass on the importedJSON var to the callback function
		});
};

module.exports = {												// define the module exports
	readAndParse: readAndParse,									// readAndParse can be called by jsonfilereader.readAndParse
};