autoscale: true
slidenumbers: true

# JavaScript: Scope

---

# Global Scope

```js
var x = "hello!";

function someFunction () {
  console.log(x);
}

someFunction(); // prints "hello!"
console.log(x); // also prints "hello!"
```

---

# Local Scope

```js
function anotherFunction () {
  var y = "beep";
  console.log(y);
}

anotherFunction(); // prints "beep"
console.log(y); // throws "ReferenceError: y is not defined" 
```

---

# Local Scope (continued)

```js
function sampleFunction (x) {
  console.log(x);
}

sampleFunction("apple"); // prints "apple"
console.log(x); // throws "ReferenceError: x is not defined"
```

---

# Exercise 1

Create a script that does the following:

- declares and assigns a global variable to an integer
- defines a function that contains a local variable and returns the value of that local variable + the global variable
- finally, calls the function and prints out its return value

---

# Scoped Functions

```js
function outsideFunction () {

  function insideFunction () {
    console.log("hi!");
  }

  insideFunction();
}

outsideFunction(); // calls insideFunction, which then prints "hi!";
insideFunction(); // ReferenceError: insideFunction is not defined
```

---

# Nested Scopes

```js
var grapefruit = 1;

function outerFunction () {
  var apple = 2;

  function innerFunction () {
    var orange = 3;

    // here we have access to variables 'grapefruit', 'apple', and 'orange'
    console.log(grapefruit + " " + apple + " " + orange); // prints "1 2 3"
  }
  
  // here we have access to variables 'grapefruit' and 'apple', but not 'orange'
}

// here we have access only to variable 'grapefruit'
```
