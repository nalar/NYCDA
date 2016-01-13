# Reference Notes

# Summary
- Prototypes are used to extend object functionality
- After modifying an object's prototype, new instances of an object will have those properties

---

# Detail
- Assign new properties to the `prototype` property to modify that object's prototype
- Like any other object, a prototype property can take any form, including functions or objects
- If the property is a function, using the `this` keyword inside the function gives you access to the current object