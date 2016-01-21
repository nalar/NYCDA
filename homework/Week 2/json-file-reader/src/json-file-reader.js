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

var fs = require('fs');

function readAndParse(targetJSON, callback){
		fs.readFile(targetJSON, 'utf8', function(err, data) {
			if(err){
				throw err;
			};
			var importedJSON = JSON.parse(data);
			callback(importedJSON);
		});
};

module.exports = {
	readAndParse: readAndParse,
};