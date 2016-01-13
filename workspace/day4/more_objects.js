////
// Example 1
function Rectangle(width, height) {			// Define function to make a new Rectangle
	this.width = width;						// Define the width
	this.height = height;					// Define the height
}

var aRectangle = new Rectangle(4, 5); 		// Rectangle {width: 4, height: 5}
var bRectangle = new Rectangle(6, 7); 		// Rectangle {width: 6, height: 7}

////
// Example 2
function Animal(type, height) {				// Define function to make a new animal
	this.kingdom = "metazoa";				// All animals seem to be part of the metazoa
	this.type = type;						// Define the type
	this.height = height;					// Define the height
}

var cat = new Animal("feline", "10in");		// Animal {kingdom: "metazoa", type: "feline", height: "10in"}
var dog = new Animal("canine", "25in");		// Animal {kingdom: "metazoa", type: "canine", height: "25in"}

////
// Exercise 1
function Star(points, color) {				// Define function to make a new Star
	this.banana = points;					// Define the banana
	this.color = color;						// Define the color
}

var star = new Star(5, "yellow");			// Star {banana: 5, color: yellow}

////
// Exercise 2
function FullName(firstName, middleName, lastName) {	// Define function to make a new FullName
	this.firstName = firstName;							// Define the first name
	this.middleName = middleName;						// Define the middle name
	this.lastName = lastName;							// Define the last name
	this.fullName = this.firstName + " " + this.middleName + " " + this.lastName; // Define the full name
}

var aName = new FullName("Jon", "Robert", "Miller");	// aName = Fullname{firstName: "Jon", middlename: "Robert", lastname: "Miller", fullName: "Jon Robert Miller"}

////
// Exercise User object with usn, email and psw
function User(username,email,password) {	// Define function to make a new User
	this.username = username;				// Define the username
	this.email = email;						// Define the email
	this.password = password;				// define the password
}

var userA = new User("Thijs", "thijstel@gmail.com", "Secret"); 	// Create userA
var userB = new User("Jon", "jon@nycda.com", "Secret");			// Create userB
console.log(userA);												// Output userA to log
console.log(userB);												// Output userB to log