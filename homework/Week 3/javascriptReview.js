// write a function that takes in three parameters and returns the sum of those three parameters

function getSum(a, b, c) {
	return (a + b + c);
};

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s
function lastLetter(string) {
	return (string.charAt(string.length - 1));
}

// write a function that takes in one parameter and returns the cube of that parameter
function cubeParam(a) {
	return (a * a);
}

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)
function cumbersomeReverseString(string) {
	var reverseString = "";
	for (i = string.length - 1; i >= 0; i--) {
		reverseString += string[i];
	}
	return (reverseString);
}

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the secend array as values.
function arraysToObject(keyarray, valuearray) {
	var keyvalueObject = {};
	for (i = 0; i < keyarray.length; i++) {
		keyvalueObject[keyarray[i]] = valuearray[i];
	}
	return (keyvalueObject);
}

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys with the
// two arrays as values
function switchKeyValue(object) {
	var keyArray = [];
	var valueArray = [];
	for (var property in object) {
		keyArray.push(object[property]);
		valueArray.push(property);
	}
	return (arraysToObject(keyArray, valueArray));
}

// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions
function XtoN(x, n) {
	calc = "x";
	if (n >= 0) {
		for (i = 0; i < n - 1; i++) {
			calc += '*x'
		}
		return (eval(calc));
	} else {
		// turn n from negative to postive
		neg = n.toString();
		n = neg.substring(1);
		for (i = 0; i < n - 1; i++) {
			calc += '*x'
		}
		return (1 / eval(calc));
	}
}

console.log(XtoN(2, -2));

// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

//console.log(helpJon(seatArray));