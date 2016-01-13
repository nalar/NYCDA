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