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