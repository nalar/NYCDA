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
//
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
function rot13(str) {
	var pattern = /([^\w])+/g;
	var deciphered = ""
	
	for (var i = 0; i < str.length; i++) {
		if(pattern.test[str.charAt[i]]) {
			deciphered = deciphered + str.charAt[i];
		}
		else{
			deciphered = deciphered + String.fromCharCode((str.charCodeAt(i)-13));
		}
	} 
	return deciphered;
}


// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
