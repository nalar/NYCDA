var fruit = ["apple", "orange", "grapefruit", "bananas"];			// Define our fruits
var vowels = ["a", "e", "o", "u", "y", "i", "A", "E", "O", "U", "Y", "I"];						// We all know our vowels

for (var i = 0; i < fruit.length; i++) {							// For i = the number of fruits
	if (contains(vowels, fruit[i].charAt(0))) {						// Uses the "Contain" function from line 13 with the input argumens vowels and the first letter of the fruit.
		console.log("Give me an " + fruit[i] + " please!")			// Run this if the fruit has a vowel as first letter
	}																
	else {															
		console.log("Give me a " + fruit[i] + " please!")			// Run this if the fruit does noet have a vowel as first letter
	}	
}

function contains(targetarray, inputvalue) {						// function name(input1, input2)
    for (var i = 0; i < targetarray.length; i++) {					// for the length of the targetarray
        if (targetarray[i] === inputvalue) {						// see if  item  i of the array contains the inputvalue
            return true;											// if so: return true
        }
    }
    return false;													// if not: return false
}