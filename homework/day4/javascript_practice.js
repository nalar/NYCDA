/////
/// Write a function using Math.PI which returns the area of a circle
function areaCircle(radius) {
	return (Math.PI * (radius * radius));
}
console.log("The area of an circle with radius 10 is " + areaCircle(10));

/////
/// Given a string, create a function that returns the last letter of the string
function lastLetter(string) {
	return (string.charAt(string.length - 1));
}
console.log("The last letter of the word hello is : " + lastLetter("hello"));

/////
/// Write a function that takes parameter length and prints out that many stars
function printStars(amount) {
	printString = "";
	for (var i = 0; i < amount; i++) {
		printString = printString + "*";
	}
	return printString;
}
console.log("Here are 5 stars: \n" + printStars(5));

/////
/// Write a function that takes parameter length and prints out a square of stars
function printStarSquare(amount) {
	printString = "";
	for (var i = 0; i < amount; i++) {
		printString = printString + "*";
	}

	printStringSquare = printString;

	for (var j = 0; j < amount - 1; j++) {
		printStringSquare = printStringSquare + "\n" + printString;
	}
	return printStringSquare
}
console.log("Here are 5x5 stars: \n" + printStarSquare(5));

/////
/// Given an array of integers and returns the average
function averageArray(array) {
	total = 0;
	for (i = 0; i < array.length; i++) {
		total = total + array[i];
	}
	average = total / array.length;
	return average;
}
console.log("The average of 5, 8 and 10 is:\n" + averageArray([5, 8, 10]));

/////
/// Write a function that takes two arrays of integers and returns the largest common
/// if there arent any common integers return undefined
// function largestCommonInt(array, array2) {
// 	combined = array.concat(array2);
// 	combined = combined.sort(function(a, b) {
// 		return a - b;
// 	});
// 	common = [];

// 	for (i = 0; i < combined.length; i++) {
// 		if (combined[i + 1] === combined[i]) {
// 			common.push(combined[i]);
// 		}
// 	}
// 	return (common);
// }

// console.log("The largest commint is: \n" + largestCommonInt([1, 2, 50, 30], [4, 50, 6, 30, 6, 9]));

function largestCommon(array1, array2) {
	largestArray = array1;
	smallestArray = array2;
	commonInts = [];

	if (array2.length > array1.length) {
		largestArray = array2;
		smallestArray = array1;
	}

	for (i = 0; i < largestArray.length; i++) {
		for (j = 0; j < smallestArray.length; j++) {
			if (largestArray[i] == smallestArray[j]) {
				commonInts.push(largestArray[i]);
			}
		}
	}
	commonInts = commonInts.sort(function(a, b) {
		return a - b;
	});
	if (commonInts.length === 0) {
		return undefined
	} else {
		return commonInts[commonInts.length - 1];
	}
}

console.log("The largest common integer is: \n" + largestCommon([1, 2, 50, 30], [4, 50, 6, 30, 6, 9]));
console.log("The largest common integer is: \n" + largestCommon([1, 2, 500, 0, -4], [400, 50, 6, 30, 6, 9]));