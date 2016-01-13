var Strings = ["dog", "Hello", "Notlong", "how", "megalongstringinthisone", "twet"];		// List of strings to choose form
var Longest = "";																			// At the start the longest string is unknown --> empty

for (var i = 0; i < Strings.length; i++) {													// For each string in Strings do the following:
	if (Strings[i].length>Longest.length){													// See if the length of the string is longer than the current longest string
			Longest = Strings[i]															// If it is, replace it
		}
}																							// Note that there is no else{} because nothing happens when the current string is not the longest

console.log(Longest + " is the longest string.")											// Output the longest string