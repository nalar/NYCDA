var fs = require('fs');
var targetJSON = ("../countryinformation/countries.json");

fs.readFile(targetJSON, 'utf8', function(err, data) {

	if(err){
		throw err;
	};

	var importedJSON = JSON.parse(data);
	console.log("Succesfully parsed: " + targetJSON);
	console.log(importedJSON[1].name);
});