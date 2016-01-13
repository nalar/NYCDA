// I used a different method with the same result, it's less efficient but it works.

var Strings = ["dog", "Hello", "Notlong", "how", "megalongstringinthisone", "twet"]; 									// Just the list of stirngs
var Longest = 0;																										// Length of the longest string

for (var i = 0; i < Strings.length; i++) {																				// For each element of Strings do the following:
	var CurrentLength = Strings[i].length;																				// Get the current length
	if (CurrentLength >Longest){																						// Is the current length longer than the longest
			Longest = CurrentLength;																					// Yes it is, replace the the Longest length
			Longestid = i;																								// Change the position of the longest ID
			console.log(Strings[i] + " is the longest string with " + CurrentLength + " is the longest so far.");		// Log output
		}
		else{
			console.log(CurrentLength + " is not the longest string.");													// If it's not the longest, don't do anything but log
	}
}

console.log(Strings[Longestid] + " is the longest string.")																// At the end, print out the longest string