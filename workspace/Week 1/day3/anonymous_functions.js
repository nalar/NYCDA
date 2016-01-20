////
// Example 1
// Syntactic Sugar
function something() {								// Define function something
	console.log("regular function");				// Log a string
}
var something2 = function(){						// Declare variable something2 as a function
	console.log("anonymous function")				// Function logs a string
}

// These two functions are essentiallly the same:
something();
something2();

////
// Example 2
// Function as a Parameter
function performOperation(x, y, operation){									// Define function performOperation with inputs x, y and operation
	console.log("performing operation with inputs: " + x + " " + y);		// Output the inputs specified
	var z = operation(x, y);												// Define variable z's value as the result of the operation(x, y) function
	console.log("result: " + z);											// Output the result z to hte log
}

var multiply = function(a, b){												// Declare variable multiply as a function with input a and b
	return a * b;															// Return the value of a times b
}

var getGreaterNumber = function(a, b){										// Declare variable getGreaterNumber as a function with input a and b
	if(a > b){																// If a is bigger than b
		return a;															// return a
	} else{																	// else
		return b;															// return b
	}
}

// Perform a bunch of operations to test the function
performOperation(2, 3, multiply);
performOperation(10, 10, multiply);
performOperation(5, 6, getGreaterNumber);
performOperation(5, -6, getGreaterNumber);

////
// Example 2.2
function identity(x){												// Define funtion identity with input x
	console.log("x is: " + x);										// Just output x to the console log
}

function negative(x){												// Define function negative with input x
	var y = -x;														// declare variable y is the negative of x
	console.log("-x is: " + y)										// Output negative x to the console og
}

function doSomeThings(smallback){									// Define function doSomeThings with input callback which has to be a function
	smallback(3);													// Call function callback() a couple of times
	smallback(4);													// You could for instance call: doSomeThings(negative)
	smallback(5);													// and all the callbacks would be negative(3); negative(4) etc
}

// What is printed here?
doSomeThings(identity);
doSomeThings(negative);
doSomeThings(function(x) {											// Instead of inputting a variable function, you can also just input a function
	var squared = x * x;											// declare variable squared is x times x
	console.log("x squared is: " + squared);						// output the result of squared to the log
})

////
// Example 3
function doWork(onSuccess, onError){								// Define function doWork with inputs onSuccess and onError
	function contrivedFunction(){									// Define (local) function contrivedFunction with no input
		return Math.random() < .5;									// Return true or false based on wether Math.random() returns over or under 0.5
	}

	var didSucceed = contrivedFunction();							// Declare variable didSucceed's value as the output of contrivedFunction

	if(didSucceed) {												// If we succeeded
		onSuccess();												// Call input function onSuccess()
	} else{															// Else
		onError();													// Call input function onError()
	}
}

doWork(																// Call the function doWork with two functions as input
	function() {													// This will end up as onSucces in the doWork function
		console.log("woo! success!");								// Log to the console
	},																// Note the comma to seperate the two inputs
	function() {													// This will end up as the onError in the doWOrk function
		console.log("error :c");									// Log to the console
	}
	)

////
// Exercise 1
// Create function findSum that takes two parameters and returns the sum of these parameters
function findSum(a, b){								// Define a function to return the sum of a and b
	return(a+b);									// Return the sum a and b
}

// Create function findProduct that takes two parameters and returns the product of these parameters
function findProduct(a, b){							// Define a function to find the product of a and b
	return(a*b);									// Return the product of a and b
}

// Create a function threeOperation that takes in two parameters (x and operation)
// the first is a number, the second is a function
// it should call the operation parameter as a function
// and pass along 3 and x as the parameters to the function
function threeOperation(x, operation){				// Define a function to use operation on x and 3
	return(operation(3, x));						// run operation on 3 and x
}

console.log(threeOperation(4, findSum) === 7);			// Log if the answer is corrent (true) or false
console.log(threeOperation(5, findSum) === 8);			// Log if the answer is corrent (true) or false
console.log(threeOperation(4, findProduct) === 12);		// Log if the answer is corrent (true) or false
console.log(threeOperation(5, findProduct) === 15);		// Log if the answer is corrent (true) or false