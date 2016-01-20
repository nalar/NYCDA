var fs = require('fs');										// Require filesystem module

fs.readFile('./sample.txt', function (err, data) {			// read sample file
	if (err) {												// If there is an error
		throw err;											// Throw the error
	}

	var text = data.toString();								// Convert to string

fs.writeFile('duplicate.txt', text, function(err){
	if (err) {
		throw err;
	}
	console.log("Duplicated file")
})
	
});															// End