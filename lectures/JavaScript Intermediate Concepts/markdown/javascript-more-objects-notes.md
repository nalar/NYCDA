# Reference Notes

---

# Summary: Keywords
- There are two new keywords here, `new` and `this`.
- The `new` keyword treats the called function as a `constructor`.
- Within a constructor, the `this` keyword refers to the object being created. This created object is called an 'instance'.

---

# Explanation of Concepts
- Think of a constructor function as a 'cookie cutter' or 'blueprint', and the instances it returns as the 'cookies'.
- The constructor function tells us what the cookies are going to look like, and calling that function gives us a new cookie.
- Another analogy: the constructor function is a blueprint for a house, and the instances are the actual houses. 

---

# `new` keyword
- Normally, calling a function executes the function body, and optionally returns a value (with `return`)
- Calling a function with the `new` keyword does something different: it creates a new object, which is then modified by changing properties on the `this` keyword. The new object is then returned once the function is done executing.