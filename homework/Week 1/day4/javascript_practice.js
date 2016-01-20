/////
/// Write a function using Math.PI which returns the area of a circle
var radius1 = 10;
var radius2 = 3.5;
function areaCircle(radius) {
	return (Math.PI * (radius * radius));
}
console.log("The area of an circle with radius " + radius1 + " is " + areaCircle(radius1));
console.log("The area of an circle with radius " + radius2 + " is " + areaCircle(radius2));

/////
/// Given a string, create a function that returns the last letter of the string
var word1 = "pikachu";
var word2 = "pokemon";
function lastLetter(string) {
	return (string.charAt(string.length - 1));
}
console.log("The last letter of the word " + word1 + " is : " + lastLetter(word1));
console.log("The last letter of the word " + word2 + " is : " + lastLetter(word2));

/////
/// Write a function that takes parameter length and prints out that many stars
var star1 = 5;
var star2 = 39;
function printStars(amount) {
	printString = "";
	for (var i = 0; i < amount; i++) {
		printString = printString + "*";
	}
	return printString;
}
console.log("Here are " + star1 + " stars: \n" + printStars(star1));
console.log("Here are " + star2 + " stars: \n" + printStars(star2));

/////
/// Write a function that takes parameter length and prints out a square of stars
var sqstar1 = 5;
var sqstar2 = 8;
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
console.log("Here are " + sqstar1 +"x" + sqstar1 + " stars: \n" + printStarSquare(sqstar1));
console.log("Here are " + sqstar2 +"x" + sqstar2 + " stars: \n" + printStarSquare(sqstar2));

/////
/// Given an array of integers and returns the average
var array1 = [5, 8, 10];
var array2 = [1929.2, 8.32, 1032];
function averageArray(array) {
	total = 0;
	for (i = 0; i < array.length; i++) {
		total = total + array[i];
	}
	average = total / array.length;
	return average;
}
console.log("The average of "+ array1 +" is:\n" + averageArray(array1));
console.log("The average of "+ array2 +" is:\n" + averageArray(array2));

///// Other method that is semi-functional but I haven't finished it because it got inefficient
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