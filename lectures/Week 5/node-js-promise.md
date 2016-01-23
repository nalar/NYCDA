autoscale: true
slidenumbers: true

---

# Promise
- A way to create easy to read asynchronous code
- Wraps asynchronously executing code into chains of function calls to make things more legible
- No more "callback" parameter in your asynchronous functions

---

# Promise vs traditional async code

---

# Read file example

---

# Custom promise example

---

# Chained *then* call example

---

# Anatomy of a Promise

```js
var promise = new Promise(function (resolve, reject) {
	// do the thing

	// if there was an error
	reject(error);

	// if everything went well
	resolve(result);
});
```

---

# Calling the Promise

```js
promise.then(resolve, reject);

function resolve(result) {
	// do something with the result
}

function reject(error) {
	// handle the error
}
```

---

# Exercise
- Change this function into Promise form
- Use your new Promise to make sure it works
```js
function doWork(onComplete) {
	// the setTimeout call causes the inner function to execute after 1000 milliseconds
	setTimeout(function() {
		onComplete("work complete");
	}, 1000);
}
```

---

# Exercise
- Change this function into Promise form
- Use your new Promise to make sure it works
- Hint: instead of creating a Promise object directly, wrap that in a function that takes in an input parameter

```js
function doWork(input, onComplete) {
	// input being processed yay
	// the setTimeout call causes the inner function to execute after 1000 milliseconds
	setTimeout(function() {
		onComplete(input + " complete");
	}, 1000);
}
```

---

# Exercise
- Using a `Promise`, wrap the following postgreSQL query: `"SELECT * FROM <tablename>;"` where 'tablename' is a table of your choice
- The Promise should pass an array containing the rows from that query to the 'resolve' function.
- The Promise should also return the error to the 'reject' function if the query fails.

---

# Exercise
- Building from the previous exercise, now modify your code to take in the table name as an input parameter.
- Do this by creating a function that takes in one parameter (the table name), and then returns a newly created Promise which contains that table name in the query.
