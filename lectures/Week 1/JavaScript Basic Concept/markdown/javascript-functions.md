autoscale: true
slidenumbers: true

# JavaScript: Functions

---

# A simple function

```js
function babysFirstFunction() {
	console.log('hi everyone!');
	console.log('look at me!');
}
```

---

# Calling this function

```js
console.log('apple');
babysFirstFunction();
console.log('orange');
```

---

# Exercise
- What does the following print out?

```js
function beep() {
	console.log("apple");
	console.log("orange");
}

console.log("grapefruit");
beep();
console.log("persimmon");
beep();
```

---

# Exercise
- What does the following print out?

```js
function red() {
	console.log("red");
}

function blue() {
	console.log("blue");
}

blue();
red();
console.log("green");
blue();
```

---

# Function Parameters

```js
function kingfisher(obsidian, marble) {
	console.log(obsidian + marble);
	console.log(obsidian * marble);
	console.log(obsidian - marble);
}

kingfisher(6, 2);
kingfisher(10, 20);
```

---

# Exercise
- What does the following print out?

```js
function swordfish(tourmaline, hematite, mithril) {
	console.log(tourmaline + hematite + mithril)
}

swordfish(1, 2, 3);
swordfish(4, 5, 6);
```

---

# Example

```js
function boop(seagull, bagel) {
	console.log(seagull);
	console.log(bagel);
	console.log(seagull + bagel);
}

boop(1, 2);
boop(50, 30);
```

---

# Example 2
```js
function bop(prince, princess) {
	console.log(prince - princess)
}

var peanut = 10;
var butter = 15;

bop(peanut, butter);
bop(butter, peanut);
bop(peanut, peanut);
```

---

# Exercise
- Write a function that takes in three parameters and prints out the sum of all three parameters.
- Make sure to test your function by calling it.

---

# Return values

```js
function fetchAnApple() {
	return "apple";
}

var pastry = fetchAnApple();
console.log(pastry);

console.log(fetchAnApple());
```

---

# Anatomy of a function
- This function finds the area of a triangle.
- The function is named findAreaOfTriangle.
- It takes in two parameters, base and height.
- It outputs a return value, which is equal to (base * height) / 2
 
```js
function findAreaOfTriangle(base, height) {
	return (base * height) / 2;
}
```

---

# Exercise
- What is the value of smith, stafford, and sander?

```js
function heron(t) {
	if(t > 0) {
		return "positive patsy";
	} else if(t < 0) {
		return "negative nancy";
	} else {
		return "zero xander";
	}
}
var smith = heron(-2);
var stafford = heron(0);
var sander = heron(9001);
```

---

# Exercise
- What is the value of emu?
- What is the value of xinu?

```js
function hello() {
	return 10;
}

function goodbye(ostrich) {
	return ostrich * 3;	
}

var emu = goodbye(hello());
var xinu = goodbye(hello() - 5);
```

---

# Exercise
- What are the values of a, b and c?

```js
function starburst(x, y) {
	if(x > y) {
		return x;
	} else {
		return y;
	}
}

var a = starburst(10, 20);
var b = starburst(4, 5);
var c = starburst(a, b)

```

---

# Exercise
- What does the following print out?

```js

var walter = 3;

for(var i = 0; i < 10; i++) {
	var belt = vulcan(i, walter);
	console.log(belt);
}

function vulcan(boop, beep) {
	var stark = boop * beep; 
	return stark;
}

```

---

# Exercise
- Create a function that takes in one parameter and prints out "Hi" followed by the value of that parameter.
- For example, if the parameter is "*Melisandra*", it should print "*Hi Melisandra!*"

---

# Exercise
- Create a function that takes in one parameter and returns the square of that parameter.
- Remember to test your function by calling it.

---

# Exercise
- Create a function that takes two parameters and returns whichever one is smaller.
- Hint: use an *if* statement

---

# Exercise
- Create a function that takes two parameters and returns whichever one is closer to 0.

---

# Exercise
- Create a function that takes in an array, and finds the maximum value within that array.
