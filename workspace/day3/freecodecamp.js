/////////////////////////////////////////////////
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