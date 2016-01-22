var fs = require('fs');			// Require fs for file I/O
var numFilesRead = 0;			// Number of files read is 0

// var peopleList = [];			// peopleList is empty (this is for the 2-file variant)
var peopleComplete =[];			// peopleComplete is empty
var numFiles;					// The number of files in the directory

fs.readdir('./resources', function (err, files) {		// Read the directory ./resources and return the files in it
	if (err){throw err;};								// If there is an error, throw it
 	console.log(files);									// Log the list of files
 	numFiles = files.length;							// Set the number of files to the length of the file list
 	for(i=0; i<files.length; i++){						// For every file from the list
 		getFileContents(files[i]);						// call getFileContents
 	};
 });

function getFileContents(file){										// Define function getFileContents with input file
	fs.readFile("./resources/"+file,'utf8', function(err, data){	// Read the file
		console.log("Read file");									// Log the file read
		complete(data);												// Pass the data on to complete()
	});
}

function complete(data){											// Define function complete (final step in the process)
	numFilesRead++;													// Update the amount of files read
	peopleComplete.push(JSON.parse(data));							// Push the data to the peopleComplete array
	if(numFilesRead === numFiles){									// If the number of files read is equal to the total number of files
		var allNames = [];											// Empty array for sorting later on
		for(i=0; i<peopleComplete.length; i++){						// For 0 to the length of peopleComplete
			for(people in peopleComplete[i]){						// For every item in peoplecomplete[i]
				allNames.push(peopleComplete[i][people]);			// Push the item to the allNames array
			}
		}
		allNames.sort();												// Sort the allNames array
		console.log(allNames);											// Log the allNames array
		fs.writeFile('peopleComplete.json', JSON.stringify(allNames));	// Json stringify allNames and write the peopleComplete.json file
	};
};

////////////////////////////////////
/// Below is the working code for 2 fixed files not N files
// fs.readFile('./resources/people1.json','utf8', function(err, data){
// 	console.log("Read file1");
// 	complete(data);
// });

// fs.readFile('./resources/people2.json','utf8', function(err, data){
// 	console.log("Read file2")
// 	complete(data);
// });


// function complete(data){
// 	numFilesRead++;
// 	console.log("Files read: " + numFilesRead);
// 	peopleList.push(JSON.parse(data));
// 	if (numFilesRead === 2) {
// peopleList[0][0] first name in list
		// allNames = [];
		// for(i=0; i<peopleList.length; i++){
		// 	for(people in peopleList[i]){
		// 		allNames.push(peopleList[i][people]);
		// 	}
		// }
// 		peopleComplete = allNames.sort();
// 		console.log(peopleComplete);
// 		fs.writeFile('peopleComplete.txt', peopleComplete);
// 	}
// };