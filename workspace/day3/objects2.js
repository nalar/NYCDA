////
// Example anObject
var anObject = {							// Initiate a new object called anObject
	0: 1,					// assign key : value pair 1
	anotherProperty2: 1,
	anotherProperty3: 1,
	anotherProperty4: 1
}

anObject.aProperty = 10;					// Set anObject.aProperty to 10 (key/value pair 2)
anObject["yetAnotherProperty"] = 12;		// Add key/value set yetAnotherProperty: 12 to the anObject

////
// // Example with some values
function doSomeWork() {					// Empty function
	return("Swag");
}

var someValue = doSomeWork();			// Get a value from the funciton
anObject[someValue] = 12;				// set anObject key someValue to value 12
anObject.confused = "Call early";		// set anObject key confused to "call early"
anObject[2] = "This";					// Set anObject key 2 to "This"
anObject[4] = "comes up at top";		// Set anObject key 4 to "comes up at top"

//console.log(anObject);						// Log the entire object
//console.log(anObject['anotherProperty4'])	// Log anObject's key anotherProperty4

var array = ['length', 'width', 'height']; 	// Looks like an array but is a non-array object
 for(var i = 0; i < 3; i++) {
     array[i];
}

console.log("**************************")

for (var property in anObject) {
	console.log(property);
	console.log(anObject[property]);
}