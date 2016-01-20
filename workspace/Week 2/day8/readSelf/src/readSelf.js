var fs = require('fs');										// Require filesystem module

fs.readFile('./src/readSelf.js', function (err, data) {		// read example.js add ./src/ because the working directory is ./
	if (err) {												// If there is an error
		throw err;											// Throw the error
	}

	var text = data.toString();								// Convert to string
	console.log(text);										// Log contents
});															// End