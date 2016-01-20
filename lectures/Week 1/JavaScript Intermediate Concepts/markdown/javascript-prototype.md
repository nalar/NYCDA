autoscale: true
slidenumbers: true

# Object Prototypes

---

# Example: extending a built-in class

```js
"hello".length; // 5
"hello".length2; // undefined

String.prototype.length2 = 1000;
"hello".length2; // 1000

String.prototype.twiceLength = function() {
    return this.length * 2;
}
"hello".twiceLength(); // 10
```

---

# Example: extending your own class

```js
function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.distanceFrom = function(point) {
	var xSquared = (this.x - point.x) * (this.x - point.x);
	var ySquared = (this.y - point.y) * (this.y - point.y);
	return Math.sqrt(xSquared + ySquared);
}
```

---

# Example 2 continued
- What is the value of `distance`?

```js
var aPoint = new Point(3,4);
var bPoint = new Point(0,0);

var distance = aPoint.distanceFrom(bPoint));
```

---

# Exercise
- Create a 'rectangle' class
- The constructor should take in four parameters: x, y, width, and height, where x and y are the top left corner
- Modify this class's prototype to contain a "computeArea" function, which returns the area of the rectangle

---

# Exercise
- Modify the 'rectangle' class's prototype to contain a "containsPoint" function, which detects whether a point is within the rectangle