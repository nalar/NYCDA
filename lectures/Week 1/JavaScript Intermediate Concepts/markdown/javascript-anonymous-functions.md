autoscale: true
slidenumbers: true

# Anonymous Functions

---

# Example: Syntactic Sugar

```js
function something() {
	console.log("regular function");
}
var something2 = function() {
	console.log("anonymous function");
}

// these two functions are essentially the same
something();
something2();
```

---

# Example: Function as a Parameter

```js
function performOperation(x, y, operation) {
	console.log("performing operation with inputs: " + x + " " + y);
	var z = operation(x, y);
	console.log("result: " + z);
}

var multiply = function(a, b) {
	return a * b;
}

var getGreaterNumber = function(a, b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
}
```

---

# Example: Function as a Parameter (2)
- What is printed here?

```js
performOperation(2, 3, multiply);
performOperation(10, 10, multiply);
performOperation(5, 6, getGreaterNumber);
performOperation(5, -6, getGreaterNumber);
```

---

# Example 2: Function as a Parameter

```js
function identity(x) {
	console.log("x is: " + x);
}

function negative(x) {
	var y = -x;
	console.log("-x is: " + y);
}

function doSomeThings(callback) {
	callback(3);
	callback(4);
	callback(5);
}
```

---

# Example 2: Function as a Parameter (2)
- What is printed here?

```js
doSomeThings(identity);
doSomeThings(negative);

doSomeThings(function(x) {
	var squared = x * x;
	console.log("x squared is: " + squared); 
});
```

---

# Example 3

```js
function doWork(onSuccess, onError) {
	function contrivedFunction() {
		return Math.random() < .5;
	}

	var didSucceed = contrivedFunction();

	if (didSucceed) {
		onSuccess();
	} else {
		onError();
	}
}
```

---

# Example 3 (2)

```js
doWork(
	function() {
		console.log("woo! success!");
	},
	function() {
    		console.log("error :c");
    }
)
```

---

# Exercise
- Create a function `findSum` that takes in two parameters and returns the sum of those parameters.
- Create a function `findProduct` that takes in two parameters and returns the difference of those parameters.

---

# Exercise (continued)

- Create a function `threeOperation` that takes in two parameters, named `x` and `operation`. The first parameter is a number. The second parameter is a function.
- `threeOperation` should call the `operation` parameter as a function. It should pass the number 3 along with the `x` parameter to that function.

---

# Exercise (continued)

- Call `threeOperation` with the values of `4` and `findSum`. Check that your answer is `7`.
- Call `threeOperation` with the values of `5` and `findSum`. Check that your answer is `8`.

- Call `threeOperation` with the values of `4` and `findProduct`. Check that your answer is `12`.
- Call `threeOperation` with the values of `5` and `findProduct`. Check that your answer is `15`.

---

# What is this for?