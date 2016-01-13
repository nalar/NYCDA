//
Example 1 Global Scope
var x = "hello";					// Declare global variable x

function someFunction() {			// Define function someFunction
	console.log(x);					// log global variable x
}

someFunction();						// Call someFunction (prints x)
console.log(x);						// Also prints x

////
// Example 2 Local Scope
function anotherFunction() {		// Define function anotherFunction
	var y = "beep";					// declare local variable y
	console.log(y);					// log local variable y
}

anotherFunction();
// console.log(y); 					// This won't run because y is not a global variable

function sampleFunction(x) {		// Define funciton samplefunction with input x
	console.log(x);					// print whatever x is
}

sampleFunction("apple");			// This will print apple
//console.log(x);					// x would return but not the x from samplefunction

////
// Exercise 1
var globalVar = 10;					// Declared outside of a function, so it's global

function localVarFun(){				// Define the localVarFun function
	var localVar = 20;				// Declared inside of a function, so it's local
	return("The local variable is " + localVar + " and the global variable is " + globalVar + ". Their sum is: " + (localVar+globalVar));	// Return a string in the console log
}

console.log(localVarFun());

////
// Example 3 Scoped Functions
function outsideFunction(){			// Define a new global function called outsideFunction with no input
	function insideFunction(){		// Define a new local function called insideFunction with no input
		console.log("hi");			// Inside function prints "hi"
	}
	insideFunction();				// Call insideFunction() from within the local scope
}

outsideFunction();					// Calls function outsideFunction which in turn calls insideFunction
// insideFunction();				// This won't run because its a local scope function

////
// Example 4 Nested Scopes
var grapefruit = 1;					// Global var grapefruit 	Level #1
function outerFunction(){
	var apple = 2 ;					// Local var apple 			Level #2
	function innerFunction(){
		var orange = 3;				// Local var orange 		Level #3
		// Here we have access to variables 'grapefruit' 'apple' and 'orange'
		console.log(grapefruit + " " + apple + " " + orange);
	}
	// Here we have access to variables 'grapefruit' and 'apple'
}
// Here we only have access to 'grapefruit'