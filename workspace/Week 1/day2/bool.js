////
// Example 1
var done = false; 					// Set var done as boolean false
var counter = 0;					// Set var counter to zero

while(!done) {						// As long as done is not true
	console.log("not done");		// output to log
	if(counter >= 5) {				// If the counter is over or at 5
		done = true;				// Set the boolean done to true
	}
	counter++;						// Increment the counter by 1
}

var district = false;				// Set var district as boolean false
var classic = 15;					// Set var classic to 15

if( !(district || classic > 16) ) {		// If district is not true or classic is not over 16
	console.log("Hi");					// output to log 
}

if (!district || classic > 16) {		// If district is not true or if classic is over 16
	console.log("Hello")				// Output to log
}