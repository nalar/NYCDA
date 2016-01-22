var fs = require('fs');																// Require filesystem i/o module
var jsonfilereader = require('../../json-file-reader/src/json-file-reader.js');		// Require the json-file-reader module

var targetCountry = process.argv[2];												// Set the targetCountry var to the process arguments

/////
//Sync
// var countrylist = (jsonfilereader.jsObject("countries.json"));
// function targetTLD(targetCountry){
// 	for (var i = 0; i < countrylist.length; i++) {
// 		if(countrylist[i].name === targetCountry){
// 			return(countrylist[i].topLevelDomain);
// 		}
// 	}
// };
// console.log("Country: " + targetCountry);
// console.log("Top Level Domain: " + targetTLD(targetCountry));

/////
//A-sync
jsonfilereader.readAndParse("./countries.json", function(dataFromFunction){			// Call the jsonfilereader.readAndParse function with arguments and an anonymous function as callback
	var countrylist = dataFromFunction;												// Define the countrylist as data from the function
	for (var i = 0; i < countrylist.length; i++) {									// For the length of the countrylist
		if(countrylist[i].name == targetCountry){									// If the countrylist name equals the target name
			console.log("Country: " + targetCountry);								// Log the targetCountry
			console.log("Top Level Domain: " + countrylist[i].topLevelDomain);		// Log its TLD
		};
	};

});