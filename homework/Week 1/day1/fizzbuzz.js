// FIZZBUZZ implementation in JavaScript for the BSSAxNYCDA Web Development Intensive January 2016
// Written by Thijs Tel

for (var i = 1; i < 101; i++) {						// For the numbers 1 to 100
	if (i % 3 === 0 && i % 5 === 0) {				// If the number is divideable by 3 & 5
		console.log("FIZZBUZZ")						// Print out FIZZBUZZ
	}
	else if(i % 3 === 0){							// If the number is divideable by 3
		console.log("FIZZ")							// Print out FIZZ
	}
	else if(i % 5 === 0){							// If the number is divideable by 5
		console.log("BUZZ")							// Print out BUZZ
	}
	else{
		console.log(i);
	}
}