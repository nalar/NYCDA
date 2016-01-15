autoscale: true
slidenumbers: true

---

# [fit] Introduction to Node.js and Express

---

# Summary
- Asynchronous
- Event Driven
- Single Threaded

---

# Callbacks: Review

```js
function doSomething(parameters, callback) {
	// do some work

	callback();
}
```

---

# Using Callbacks: Example

```js
$('#element').click(function() {
	// perform button action
});
```

---

# Using Callbacks: Example 2

```js
$.get("url", function(data, status) {
	// render new data
});
```

---

# Using Callbacks: Example 3

```js
fs.readFile(filename, function(contents) {
	// process file data
});
```

---

# The Simplest Server

```js
var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('your very first server. good work!');
});

var server = app.listen(3000);
```

---

# package.json example

```js
{
  "name": "join_table_example",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "pg": "^4.4.3",
    "sequelize": "^3.15.1"
  }
}
```

---

# Directory Structure

```
.
|-- node_modules
|-- src
|-- package.json
```