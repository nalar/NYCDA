////
// Example 1
"hello".length; 								// Returns 5
"hello".length2; 								// Returns undefined

String.prototype.length2 = 1000;				// Define the length2 value of Strings to 1000
"hello".length2; 								// Retuns 1000

String.prototype.twiceLength = function() {		// Define the twiceLength value of Strings to be a function
    return this.length * 2;						// return the length of the string times two as the result
}
"hello".twiceLength(); 							// Returns 10			

////
// Example 2
function Point(x, y) {							// Define an object Point with x and y as input
	this.x = x;									// define the x of the object
	this.y = y;									// define the y of the object
}

Point.prototype.distanceFrom = function(point) {				// Define the distanceFrom value of Points to be a function with point as input
	var xSquared = (this.x - point.x) * (this.x - point.x);		// Math
	var ySquared = (this.y - point.y) * (this.y - point.y);		// Match
	return Math.sqrt(xSquared + ySquared);						// Return the distance from the input point to the point to which *.distanceFrom was called
}

var aPoint = new Point(3,4);				// Create a new point to test with
var bPoint = new Point(0,0);				// Create another new point to test with
var cPoint = new Point(7,4);				// Create a new point for the exercise later on
var dPoint = new Point(12,17);				// Create another new point for the exercise later on

var distance = aPoint.distanceFrom(bPoint);		// Define a variable called distance which contains the distance from aPoint to bPoint

//// 
// Exercise Rectangle
// - Create a rectangle class
// - The constructor should use four parameters
// - x, y , width, height
// - where x and y are the top left corner
// - Modify the class's prototype to containe a computeArea function

function Rectangle(x, y, width, height) {	// Create a function to get a new Rectangle
	this.x = x;								// Define x
	this.y = y;								// Define y
	this.width = width;						// Define width
	this.height = height;					// Define height
}

RectangleA = new Rectangle(0,0,11,15);		// Make a new Rectangle called RectangleA at coordinates 0 0 with a widht of 10 and height of 15

Rectangle.prototype.computeArea = function(){		// Define the computeArea function with rectangle as input
	return(this.width * this.height);				// Calculate the area and return it
}

console.log(RectangleA.computeArea());				// Test run the computeArea() function

////
// Exercise 2
// - Modify the rectangle class prototype to contain a
// - which detects whether a point is within the rectangle 
Rectangle.prototype.containsPoint = function(point){	// Define the containsPoint function with point as input
	if(													// If
		(point.x < this.width && this.x < point.x )		// The x coordinate is not bigger than the width and not smaller than the start x
	 &&													// and
	 	(point.y < this.height&& this.y < point.y)		// The y coordinate is not bigger than the height and not smaller than the start y
		){
		return true;									// Return true
	}													
	return false;										// Else: return false
}

console.log(RectangleA.containsPoint(cPoint));	// Test run the containsPoint() function
console.log(RectangleA.containsPoint(dPoint));	// Test run the containsPoint() function
