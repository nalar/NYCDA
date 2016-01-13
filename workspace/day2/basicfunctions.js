//#############################################################
// This function calculates the sum of the inputs a,b and c.
function sumThreeParameters(a,b,c){								// Function to sum up a b c
	var sum = a + b + c;										// Declare that sum is a + b + c
	return sum;													// Send the output 
	console.log(sum);											// Also log the output
}

//#############################################################
// This function prints the sentence "Hi name" based on the
// name input.
function sayHi(name){											// Declare function sayHi with input name
	console.log("Hi " + name + "!");							// Output "Hi $name!" in the console
}

//#############################################################
// This function calculates the square of the input variable x
function squareParam(x){										// Declare function squareParam with input x
	squarex = x*x;												// Calculate squarex by multiplying x by x
	return squarex;												// Return the value of squarex
	console.log(squarex);										// Log the value of squarex (not neccesary)
}

//#############################################################
// This function finds the smallest number out of two
// seperate input numbers.
function findSmallest(a,b){										// Declare  function findSmallest with inputs a b
	if(a < b){													// If value a is lower then b
		return a;												// Return value a because its the smaller of the two
	}
	else if(a === b){											// Safecheck to see if the numbers are the same
		return(console.log("Both numbers are the same."));		// If they are, send a message to the console
	}
	else{														// else
		return b;												// Return value b because a is not smaller
	}
}
console.log("Find Smallest");									
console.log(findSmallest(12,12));

//#############################################################
// This function finds the number closest two zero out of
// two seperate inputs.
function close2zero(a,b){														// Declare function close2zero with inputs a b
	if(Math.abs(a) < Math.abs(b)){												// if absolute value of a is lower than the absolute value of b
		return a;																// if it is, return a (closest to zero because its the smallest)
	}
	else if(Math.abs(a) === Math.abs(b)){										// Safecheck to see if the numbers are the same
		return(console.log("Both numbers are the same distance to zero"));		// Tell the user they are
	}
	else{																		// If non of the other 2 ifs are true
		return b;																// b must be closest to zero
	}
}
 console.log(close2zero(-100,100));

//#############################################################
// This function finds the maximumn value in a given array
function findMaxValue(array){													// Declare function findMaxValue with input array
	var maxValue = array[0];													// Declare variable maxValue and set it to the first element of the array
	for (var i = 0; i < array.length; i++) {									// For each element of the array
		if (array[i] > maxValue) {												// If the element is higher than the current maxValue
			maxValue = array[i];												// The item becomes the new maxValue
		}																		
	}		
	return maxValue;															// Return the maxValue
}
// var array = [1,2,300,19,4,5,6];
// console.log(findMaxValue(array));

//#############################################################
// This function calculates the fibonnaci sequence (with a=1 and b=1) to the 
// maxNum defined using a and b as input start numbers
function fibonnaci(a,b,maxNum){													// Declare function fibonnaci with inputs a, b and maxNum
	var c = 0;																	// working value c is 0 at the start
	var count = 0;																// counter to keep track of the iteration
	while(count < maxNum-2){													// Run a while loop while the count is lower than the max number minus 2 (because we hard-code the first 2 numbers a and b)
		c = a+b;																// Working value c = a + b --> this is the current number in the sequence
		console.log(c);															// Print c 
		a = b;																	// second number becomes the first (b --> a)
		b = c;																	// third number becomes the second (c --> b)
		count++;																// update the count
	}
}
// console.log(fibonnaci(1,1,100));