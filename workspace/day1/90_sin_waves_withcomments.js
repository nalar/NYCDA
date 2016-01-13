var canvas = document.getElementById("testCanvas");			// Defines the canvas to be used
var context = canvas.getContext("2d");						// Defines the context in which the canvas is going to be used

for (var i = 0; i < 70; i++) {								// Start for loop for i = 0 to 70 do the the following, also add 1 every iteration
	createWave(40 + (i * 7));								// call the function createWave with starting position 40 plus iteration number times seven
}															// Close the for loop

context.lineWidth = 1.7;									// Define the line width
context.stroke();											// Define that we're making a stroke 						

function createWave(startPositionY) {						// Define the function createwave and declare that we need a "startPositionY"
	context.moveTo(0, startPositionY);						// Move the "pointer" to coordinates 0,startpositionY

	var frequency = 7;										// Declare that the frequency starts at 7
	for (var i = 0; i < 1230; i += 15) {					// For every step between 1 and 1230 in steps of 15
		var angle = i * (Math.PI / 180);					// Define the current angle

		var x = i / frequency;								// Calculate the next x by dividing i by the frequency
		var y = startPositionY - Math.sin(angle) * 25;		// Calculate the next y by subtracting the sin(angle) times 25 from the StartPositionY

		frequency -= 0.058;									// Short version to say subtract 0.058 from the value of frequency

		context.lineTo(x, y);								// Move the pointer to the next step
	}														// End the for loop
}