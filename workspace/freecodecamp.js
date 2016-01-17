// function reverseString(str) {
//   var strSplit = str.split("");
//   strSplit = strSplit.reverse();
//   str = strSplit.join('');
//   return str;
// }

// console.log(reverseString("hello"));
// reverseString("Howdy");
// reverseString("Greetings from Earth");

/////////////////////////////////////////////////
// function factorialize(num) {
// var factorialized = 1;
//   for(i = 1; i < num+1; i++){
//   	factorialized = factorialized * i;
//     // 1 * 2 * 3 * 4 * 5
//   }
//   return factorialized;
// }

/////////////////////////////////////////////////
// function palindrome(str) {
// 	str = str.replace(/[^a-zA-Z0-9]/g,"");
//  	var lowercase = str.toLowerCase();
//  	var strarray = lowercase.split("");
//  	console.log(lowercase);
//  	var reversearray = strarray.reverse();
//  	var reverse = reversearray.join("");
//  	console.log(reverse);
//   if(lowercase === reverse){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// 

/////////////////////////////////////////////////
// function findLongestWord(str) {
//   strArray = str.split(" ");
//   longestWord = 0;
//   for(i=0; i < strArray.length; i++){
//     if(strArray[i].length > longestWord){
//       longestWord = strArray[i].length;
//     }
//   }
//   return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// 

/////////////////////////////////////////////////
// function titleCase(str) {
// 	str = str.toLowerCase();
// 	strArray = str.split(" ");
// 	for(i = 0; i < strArray.length; i++){
// 		word = strArray[i];
// 		firstLetter = strArray[i].charAt(0).toUpperCase();
// 		strArray[i] = firstLetter + word.substr(1);
// 	}
// 	strCapitalized = strArray.join([separator = ' ']);
// 	return strCapitalized
// }

/////////////////////////////////////////////////
// function largestOfFour(arr) {							
// 	var largestFour = [];								
// 	for (var i = 0; i < arr.length; i++) {				
// 		var largest = 0;						
// 		for (var ii = 0; ii < arr[i].length; ii++) {
// 			if(arr[i][ii] > largest){
// 				largest = arr[i][ii];
// 			}
//          largestFour[i] = largest;
// 		}
// 	}
// 	return largestFour;
// }

/////////////////////////////////////////////////
//// This is the -wrong- solution
// function end(str, target) {
// 	if(str.split(" ").length === 1){
// 		LastLetter = str.substr(str.length-1,str.length-1);
// 		if(LastLetter === target){
// 			return true;
// 		}
// 		else{
// 			return false;
// 		}
// 	}
// 	else {
// 		WordArray = str.split(" ");
// 		LastWord = WordArray[WordArray.length-1];
// 		if(LastWord === "name" && target === "me"){
// 			return true;
// 		} else{
// 			if(LastWord === target){
// 				return true;
// 			}
// 			else{
// 				return false;
// 			}
// 		}

// 	}
// }

/////////////////////////////////////////////////
// function end(str, target) {
//   if(str.substr((str.length-target.length)) === target){
//     return true;
//   }
//   return false;
// }
// end("Bastian", "n");

/////////////////////////////////////////////////
// function repeat(str, num) {
// 	strRepeat = "";
// 	if(parseInt(str) < 0){
// 		return("");
// 	}
// 	else{
// 		for (var i = 0; i < num; i++) {
// 			strRepeat = strRepeat + str;
// 		}
// 	}
// 	return(strRepeat);
// }

// console.log(repeat("*", 13));

/////////////////////////////////////////////////
// function truncate(str, num) {
// if(str.length == num || num > str.length){
// 	num = str.length;
// }
// else if(num < 3){
// 	num = num;
// }else{
// 	num = num-3;
// }
// 
// 	if(str.length > num){
// 		truncatedStr = str.slice(0,num);
// 		finishedStr = truncatedStr + "...";
// 		return finishedStr;
// 	}
// 	else{
// 		return str;
// 	}
// }
// 	console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// 	console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
// 	console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));

/////////////////////////////////////////////////
// function chunk(arr, size) {
//   slicedArr = [];
//   for(i=0; i<(arr.length/size); i++){
//     slicedArr.push(arr.slice((size*i), (size*i+size)));
//   }
//   return slicedArr;
// }
//
// console.log(chunk(["a", "b", "c", "d"], 2));
// console.log(chunk([0, 1, 2, 3, 4, 5], 3));

/////////////////////////////////////////////////
// function slasher(arr, howMany) {
// 	reverse = arr.reverse();
// 	splice = arr.splice(0,(arr.length-howMany));
// 	output = splice.reverse();
// 	return output;
// }
//
// console.log(slasher([1, 2, 3, 5 , 6], 4));

/////////////////////////////////////////////////
// function mutation(arr) {
// 	bool = true;
// 	lowercase = [];
// 	lowercase.push(arr[0].toLowerCase());
// 	lowercase.push(arr[1].toLowerCase());
// 	console.log(lowercase);
// 	for (var i = 0; i < lowercase[1].length; i++) {
// 		if(lowercase[0].indexOf(lowercase[1].charAt(i)) === -1){
// 			bool = false;
// 		}
// 	}
// 	return bool;
// }
//
// console.log(mutation(["hello", "Hello"]));

/////////////////////////////////////////////////
// function bouncer(arr) {
// 	filtered =[];
// 	function filterFalse(value) {
// 		if(
// 			value === false 	|| 
// 			value === "" 		|| 
// 			(isNaN(value) 		&&
// 			 !(typeof value === 'string')) || 
// 			value === null 		|| 
// 			value === 0)
// 		{
// 			return false;
// 		}
// 		return true;
// 	}
// 	filtered = arr.filter(filterFalse);
// 	return filtered;
// }

// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));

/////////////////////////////////////////////////
// function destroyer(args) {
// 	inputArgs = arguments;
// 	array = arguments[0];

// 	function filterArgs(value) {
// 		var filterOut = true;
// 		for (var i = 1; i < inputArgs.length; i++) {
// 			if(value === inputArgs[i]){
// 				filterOut = false;
// 			}
// 		}
// 		return filterOut;		
// 	}
// 	return array.filter(filterArgs);
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

/////////////////////////////////////////////////
// function where(arr, num) {
// 	sortedArr = arr.sort(function(a, b) {return a - b;});
// 	position = 0;
// 	for (var i = 0; i < sortedArr.length; i++) {
// 		if(num <= sortedArr[i]){
// 			return(i);
// 		}
// 	}
// 	return(sortedArr.length);
// }

// console.log(where([3, 3, 5, 20], 5));

/////////////////////////////////////////////////
// function rot13(str) {
// 	var deciphered = ""

// 	for (var i = 0; i < str.length; i++) {
// 		if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
// 			if ((str.charCodeAt(i) - 13) < 65) {
// 				deciphered = deciphered + String.fromCharCode(str.charCodeAt(i)+13);
// 			} else {
// 				deciphered = deciphered + String.fromCharCode((str.charCodeAt(i) - 13));
// 			}
// 		} else {
// 			deciphered = deciphered + str.charAt(i);
// 		}
// 	}
// 	return deciphered;
// }


// // Change the inputs below to test
// console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("SERR CVMMN!"));

/////////////////////////////////////////////////
// // Example
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift(); // ourArray now equals ["J", "cat"]
// ourArray.unshift("Happy"); 
// // ourArray now equals ["Happy", "J", "cat"]

// // Setup
// var myArray = [["John", 23], ["dog", 3]];
// myArray.shift();

// // Only change code below this line.
// console.log(myArray);
// myArray.unshift(["Paul", 35]);
// console.log(myArray);

//////////////////////////////////////////////////
// Setup
// var myPlants = [
//   { 
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }  
// ];
// // Only change code below this line
// console.log(myPlants[1].list[1]);
// //var secondTree = myPlants.trees; // Change this line

///////////////////////////////////////
// Setup
// var collection = {
//     2548: {
//       album: "Slippery When Wet",
//       artist: "Bon Jovi",
//       tracks: [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     2468: {
//       album: "1999",
//       artist: "Prince",
//       tracks: [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     1245: {
//       artist: "Robert Palmer",
//       tracks: [ ]
//     },
//     5439: {
//       album: "ABBA Gold"
//     }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// // Only change code below this line
// function update(id, prop, value) {
//   if(collection[id].value !== "" && prop !== "tracks"){
//        collection[id][prop] = value;
//      }else if(collection[id].value !== "" && prop === "tracks"){
//        collection[id].tracks.push(value);
//      }else if(value == ""){
//       delete collection[id][prop];
//      }
//   return collection;
// }
// // Alter values below to test your code
// update(2548, "artist", "");
// console.log(collection);;

///////////////////////////////////////
// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//   for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr[i].length; j++){
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }
// // Modify values below to test your code
// console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

//Setup
var contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
}, {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
}, {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
}, {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
}, ];

////////////////////////////////////////////////
// function lookUp(firstName, prop) {
//     // Only change code below this line
//     for (var person in contacts) {
//         if (firstName === contacts[person].firstName && contacts[person][prop] != undefined) {
//             return (contacts[person][prop]);
//         }
//     }
//     for (var person in contacts) {
//      if (firstName !== contacts[person].firstName) {
//             return "No such contact";
//         }   
//    for (var person in contacts) {
//      if (contacts[person][prop] === undefined) {
//             return "No such property";
//     }            
//     // Only change code above this line
// }
// // Change these values to test your function
// console.log(lookUp("Akira", "likes"));
// lookUp("Harry", "likes");

//////////////////////////////////
// function sumAll(arr) {
//   totalSum=0;
//   if(arr[0] < arr[1]){
//     minNum = arr[0];
//     maxNum = arr[1];
//   } else{
//     maxNum = arr[0];
//     minNum = arr[1];
//   }
//   console.log(minNum);
//   console.log(maxNum);
//   for(i=minNum; i<=maxNum; i++)
//   {
//     totalSum = totalSum+i;
//   }
//   return totalSum;
// }
// console.log(sumAll([1, 4]));

function diff(arr1, arr2) {
  var newArr = [];
  var combArr = [];

  combArr = arr1.concat(arr2);
  combArr = combArr.sort();

for(i=0; i<combArr.length; i++){
  if(combArr[i+1] === combArr[i]){
    
  }
}
  combArr = newArr;
  return newArr;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
 
