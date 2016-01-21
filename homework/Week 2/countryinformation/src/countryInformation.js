var fs = require('fs');
var jsonfilereader = require('../../json-file-reader/src/json-file-reader.js');

var targetCountry = process.argv[2];

//Sync


//A-sync
jsonfilereader.readAndParse("./countries.json", function(importedJSON){
	countrylist = importedJSON;
	for (var i = 0; i < countrylist.length; i++) {
		if(countrylist[i].name == targetCountry){
			console.log("Country: " + targetCountry);
			console.log("Top Level Domain: " + countrylist[i].topLevelDomain);
		};
	};

});