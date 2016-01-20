autoscale: true
slidenumbers: true

# [fit] Node.js: Simple File IO

---

# Reading Files

```js
var fs = require('fs');

fs.readFile('../sample.txt', function (err, data) {
	if (err) {
		throw err;
	}

	var text = data.toString();
	console.log(text);
});
```

---

# Writing Files

```js
var fs = require('fs');

var fileContents = "hi!";

fs.writeFile("sample.txt", fileContents, function(err) {
	if(err) {
		throw err;
	}
});
```

---

# Intermediate Example:
- Create file if doesn't exist

---

# Intermediate Example:
- Read all files in directory

---

# Exercise
- Create an application that reads itself as a file and prints itself out to the console.

---

# Exercise
- Create an application that reads a file and creates a duplicate of that file.
