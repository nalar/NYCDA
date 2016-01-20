var fs = require('fs');

function readJSON(targetJSON){
	var importedJSON = JSON.parse(
		require('fs').readFileSync(targetJSON, 'utf8')
		);
	return(importedJSON);
};

module.exports = {
	jsObject: readJSON,
};