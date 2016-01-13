//// Notes
// Numbers/ Strings/ Booleans are primitives
// Array is a composite object composed of primitives
// Object contains keys which have values

var jackal = {						// Create object skate
	habitat: "desert",				// Key : Value
	numberofLegs: 4,				// Key : Value
	locomotion: "walking",			// Key : Value
	full: function(){				// Key : Function 
		return("Jackal has " + this.numberofLegs + " and moves by " + this.locomotion);
	}
}

////
// Accessing key/values
jackal.habitat; 		// Outputs "desert"
jackal.numberofLegs; 	// Outputs 4
jackal['habitat'];		// Outputs "desert"
var something = 'numberofLegs';		// Something is now equal to numberOfLegs (string)
jackal[something];		// Outputs 4

////
// Adding key/value pairs to the existing object
jackal.coat = "auburn";				// Define the key coat wit value white
jackal.object = {a: 1,b: 2, c: 3}	// You can also define a key with an array as a value
jackal.object["test"] = 4;			// When using a string always use square brackets to declare

var example = "numberofLegs";		// Say example equals numberofLegs
//console.log(jackal[example]);		// show that example is usable here

////
// Exercise Artemis
// Create an object named artemis
// give this object the following key/value pairs
// numberOfLegs: 2
// symbol: bow
// occupation: hunting
var artemis={						// Define the variable artemis as object
	numberofLegs: 2,				// Define the different key/value pairs
	symbol: "bow",
	occupation: "hunting",
	description: function(){		// You can use a function in a value
		return("This person has " + this.numberofLegs + " legs, the symbol of this person is a " + this.symbol + " and the persons occupation is " + this.occupation);
	}	
};
// console.log(artemis.description());

////
// Example people / name / number
var people = {										// Make a new object called people
	brent: 20,										// Key : Value
	spiner: 40,										// Key : Value
	whoopi: 10,										// Key : value
}

for(var person in people) {							// For each property in people
	console.log("Person name:" + person);			// Log the property name
	console.log("Person number:" + people[person]);	// Log the property attribute
}

////
// Example object / key / value
var object = {								// Make a new object called object
	key1: "value1",							// key : value
	key2: "value2",							// key : value
	key3: "value3",							// key : value
}

for(var key in object) {					// For each key in object
	console.log("Key name:" + key);			// Log the key name
	console.log("Key value:" + key[key]);	// Log the key value
}


////
// Exercise Rectangle
// What does the following print out?
var someRectangle = {		// Define a new variable somerectangle as object
	width: 10,				// Key width, value 10
	height: 20				// Key height, value 20
};

function findArea(rectangle){					// Define a new function findArea with input rectangle
	return rectangle.width * rectangle.height;	// return the value of the rectangles width value times the rectangles height value
}

var area  = findArea(someRectangle);	// Define area as the result of function findarea with input someRectangle
//console.log(area);						// log the value of area to the console

////
// Exercise Breakfast
var egg = {													// Define object egg with key/value calories 80
	calories: 80
}

var apple = {												// Define object apple with key/value calories 20
	calories: 20
}

var orangeJuice = {											// Define object orangeJuice with key/value calories 40
	calories: 40
}

var breakfast = [egg, apple, orangeJuice];					// Make an array containing the breakfast foods

function howMuchBreakfast(breakfast) {						// Define function howMuchBreakfast with input breakfast
	var numCalories = 0;									// Set variable numCalories to 0
	for(var i = 0; i < breakfast.length; i++) {				// For each item in breakfast
		numCalories = numCalories + breakfast[i].calories;	// add the amount of calories from breakfast[i].calories to the numCalories counter
	}
	return numCalories;										// Return the end value of numCalories
}

// console.log(howMuchBreakfast(breakfast));								// Call the function howMuchBreakfast with input breakfast

////
// Exercise Combinations
// Write a function that takes two arrays of the same length
// Have the first array become the keys
// Have the second array become the values

var Name = ["Jon","Zach","Lloyd"];					// Define an array with names
var Role = ["Instructor","Big Boss","TA"];			// Define an array with roles
var Numbers = [1, 2, 3];
var NumbersWords = ["One","Two","Three"];

function combineArrays(array1, array2){				// Declare the combineArrays function with inputs array1 and array2
	var object = {};								// Make an empty object 
	for(var i = 0; i < array1.length; i++) {		// For the length of the array
		object[array1[i]] = array2[i];				// object[array1 string value] = array2 waarde van plek i
	}												// !! Use square brackets because the property name is not explicitly known and you can't use dots for variables
	return object;									// return the object as result from the function
}
console.log(combineArrays(Name, Role));
console.log(combineArrays(Numbers, NumbersWords));