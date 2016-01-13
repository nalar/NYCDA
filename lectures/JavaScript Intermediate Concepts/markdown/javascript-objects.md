autoscale: true
slidenumbers: true

# Objects

---

# Brief review of other data types
- numbers: 1, 2, 3
- strings: "hey", "jude"
- booleans: true, false
- arrays: [], [7, 8], [true, true, false], [1, "tree", [1000, 10000, 10000], "canterbury tales"]

---

# Anatomy of an object
- Objects have keys which point to values.

```js
var jackal = {
	habitat: "desert",
	numberOfLegs: 4,
	locomotion: "walking"
};
```

---

# Anatomy of an object (continued)
- To access a value within an object, use its key.

```js
jackal.habitat; // "desert"
jackal.numberOfLegs; // 4
```

---

# Anatomy of an object (continued)
- Object values can also be accessed with array notation, taking in a string

```js
jackal['habitat']; // "desert"

var something = 'numberOfLegs';
jackal[something]; // 4
```

---

# Object properties
- Object properties can be set at any time.

```js
jackal.coat = "auburn";
```

- `jackal` now has four keys: `habitat`, `numberOfLegs`, `numberOfLegs`, and `coat`

---

# Exercise
- Create an object named `artemis`
- Give this object the following key/value pairs: `numberOfLegs: 2`, `symbol: bow`, and `occupation: hunting`

---

# Changing an object's properties
- An object's properties can be overwritten at will

```js
var artemis = {
	numberOfLegs: 2,
	symbol: "bow",
	occupation: "hunting"
}

artemis.symbol = "bowAndQuiver";
```

---

# Exercise
- What does the following print out?

```js
var someRectangle = {
	width: 10,
	height: 20
};

function findArea(rectangle) {
	return rectangle.width * rectangle.height;
}

var area = findArea(someRectangle);
console.log(area);
```

---

# Exercise

```js
var egg = {
	calories: 80
};
var apple = {
	calories: 20
};
var orangeJuice = {
	calories: 40
};

var breakfast = [egg, apple, orangeJuice];
```

---

# Exercise (continued)
- What does is the value of `howMuchBreakfast(breakfast)` ?

```js
function howMuchBreakfast(breakfast) {
	var numCalories = 0;
	for(var i = 0; i < breakfast.length; i++) {
		numCalories = numCalories + breakfast[i].calories;
	}
	
	return numCalories;
}

howMuchBreakfast(breakfast);
```

---

# Object Property Iteration

```js
var people = {
	brent: 20,
	spiner: 40,
	whoopi: 10
};

for (var person in people) {
	if (people.hasOwnProperty(person)) {
		console.log("person name: " + person);
		console.log("person number: " + people[person]);
	}
}
```

---

# Exercise
- Write a function that takes in two arrays of the same length
- Have the function return an object whose keys are the first array and whose values are the second array.

---

# Exercise (continued)

example:

```js
var array1 = ["a", "b", "c"];
var array2 = ["porcelain", "steel", "tar"];
```
becomes:

```js
{
	a: 'porcelain',
	b: 'steel',
	c: 'tar'
}
```