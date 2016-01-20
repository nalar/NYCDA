autoscale: true
slidenumbers: true

---

# [fit] RequireJS

---

# Usage: NPM Packages
- to include the "express" module, do:

```js
var express = require('express');
```

- `express` now contains the express library, stored in your `node_modules` directory

---

# Usage: Your Own Modules
- if a path is specified, it will traverse to it and look for the module there

```js
var models = require('./models');
```

- here, it looks for a file called `models.js`, located in the same directory as the current file

---

# Exercise
- where are the following modules located?

```js
var xmlProcessor = require('../../processors/xml');
var bodyParser = require('bodyParser');
```

---

# Creating your own module
- whatever you set `module.exports` to, that is what people will see when including your module

----

# Simple Example

---

# Multiple Functions Example

---

# Pass parameters to Module Example

---

# Exercise
- Write three functions named `sum`, `difference`, and `product` that each take in two parameters, and return the appropriate result. Print out something as well.

```js
function product(x, y) {
	console.log("finding the product of " + x + " and " + y + "...");
	return x * y;
}
```

- Put these functions in a new module called `math`, in a directory called `miscellaneous`.
- Create a new file that includes this module, then call each of the above functions at least once.