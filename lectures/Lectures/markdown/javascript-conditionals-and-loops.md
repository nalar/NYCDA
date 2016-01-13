autoscale: true
slidenumbers: true

# [fit] JavaScript: <br>Conditionals and Loops

---

# Anatomy of an if statement

The conditional expression (apple < 10) is evaluated. If it is true, the block within the conditional expression { ... } is executed. If it is false, the interpreter moves to the next statement.

````js
var apple = 9;
if(apple < 10) {
	console.log("red");
}
````

---

# If statements (continued)

The `else` keyword, if present, will be executed if the conditional expression in the if statement is false. 

````js
var apple = 15;
if(apple < 10) {
	console.log("red");
} else {
	console.log("green");
}
````

---

# Chaining if statements

The `else if` keyword can be used to test multiple conditions.

````js
var apple = 25;
if(apple < 10) {
	console.log("red");
} else if(apple < 20) {
	console.log("green");
} else {
	console.log("yellow");
}
````

---

# Exercise

````js
var elephant = 7;
if(elephant === 8) {
	console.log("peanuts");
} else if(elephant === 7) {
	console.log("bananas");
} else {
	console.log("turnips");
}
````

---

# Exercise 2

````js
var bear = 3;
if(bear < 2) {
	console.log("brown");
} else if(bear > 2) {
	console.log("black");
} else {
	console.log("polar");
}
````

---

# Anatomy of a while loop
A while loop is akin to a repeating if statement. The conditional expression is evaluated, and if the expression is true, the code within the block is executed. This repeats until the condition/expression becomes false.

````js
var counter = 0;
while(counter < 10) {
	console.log("hello!");
	counter = counter + 1;
}
````

---

# Exercise

````js
var chair = 10;
while(chair > 5) {
	console.log("cushion");
	chair = chair - 2;
}
````

---

# Exercise 2

````js
var sandal = 1;
while(sandal < 7) {
	console.log("flip flop");
	sandal = sandal * 2;
}
````

---

# Exercise 3

````js
var wiggles = 0;
var squiggles = 0;
while(wiggles < 3) {
	squiggles = squiggles + 1;
	if(squiggles > 4) {
		wiggles = 6;
	}

	console.log("merry-go-round");
}
````

---

# Exercise 4

Using a loop, print out your first name six times.

---

# anatomy of a for loop
````js
for(var x = 0; x < 10; x = x + 1) {
	console.log("hello!");
}
````
vs

````js
var counter = 0;
while(counter < 10) {
	console.log("hello!");
	counter = counter + 1;
}
````

---

# Exercise 5

Take your previous loop, and make it into a for loop.