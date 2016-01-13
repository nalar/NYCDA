autoscale: true
slidenumbers: true

# Reference Notes

---

# Anonymous Functions
- simply a function without a name
- because of this, it must either:
	- be called immediately
	- assigned to a variable or object property
	- passed as a parameter to another function
	
---

# Application of anonymous functions

- As we'll soon see, many operations are what is known as 'asynchronous'. We want to call functions only when certain conditions are met.
- examples:
	- waiting for a user to click on something
	- waiting for the operating system to read a file
	- a web server waiting for a client to hit a webpage

- fundamental to Node.js architecture