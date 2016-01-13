// Create an object that represents a book:
// Give it a “title" property with a value that is the title of your book
// Give it a “body” property which has an array of strings as the value. There should be at least three strings within the array.
// Create another object with the same format, but different title and different body.
// Now, create a function that “reads” the book by first printing out the title, then printing out each element (page) in the body.

var BookOne = {
	title: "Ender's Game",
	body: ["Written by Orson Scott Gard","Wrote this science fiction book.","Recently turned in to a blockbuster."]
};

var BookTwo = {
	title: "Infinite Jest",
	body: ["Written by David Foster Wallace","Hal Incandenze is the youngest of the Incandenze children","As a child, he was very precocious."]
};

// function Book(title, body) {
// 	this.title = title;
// 	this.body = body;
// }

// BookThree = new Book("Harry Potter", ["Written by JK Rowling", "Who is from the UK", "And wrote a bunch of books."]);
// BookFour = new Book("Harry Potter 2", ["Written by JK Rowling again", "Who is still from the UK", "And still wrote a bunch of books."]);

function readBook(book){
	var BodyText = "";
	for (var i = 0; i < book.body.length; i++) {
		if(i === 0){
		BodyText = BodyText + "page " + (i+1) + ": " + book.body[i];
		}
		else{
		BodyText = BodyText + "\n" + "page " + (i+1) + ": " + book.body[i];
		}
	}
	return(console.log("Title: "+ book.title) + console.log(BodyText));
}

readBook(BookOne);
console.log();
readBook(BookTwo);
console.log();
// readBook(BookThree);
// console.log();
// readBook(BookFour);