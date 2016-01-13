autoscale: true
slidenumbers: true

# JavaScript: More Objects

---

# the *new* keyword and the *this* keyword

```js
function Rectangle(width, height) {
	this.width = width;
	this.height = height;
}

var aRectangle = new Rectangle(4, 5);
var bRectangle = new Rectangle(6, 7);
```

---

# Exercise
- What is the value of 'cat' and 'dog'?

```js
function Animal(type, height) {
	this.kingdom = "metazoa";
	this.type = type;
	this.height = height;
}

var cat = new Animal("feline", "10in");
var dog = new Animal("canine", "25in");
```

---

# Exercise
- What is the value of 'star'? Note the 'banana' property.

```js
function Star(points, color) {
	this.banana = points;
	this.color = color;
}

var star = new Star(5, yellow);
```

---

# Exercise
- What is the value of aName?

```js
function FullName(firstName, middleName, lastName) {
	this.firstName = firstName;
	this.middleName = middleName;
	this.lastName = lastName;
	this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
}

var aName = new FullName("Jon", "Robert", "Miller");
```

---

# Exercise
- Imagine a "User" object, which contains a 'username', 'email', and 'password'.
- Create a constructor that sets these three properties on a new object.
- Using your constructor, create at least two different 'users'.