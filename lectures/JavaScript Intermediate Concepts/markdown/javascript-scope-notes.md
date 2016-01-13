# Reference Notes

---

# Summary
### At a high level:
- Scopes are a way to contain variables to certain parts of the code
- Variables within a certain scope only exist within that scope
- Roughly analogous to a rifle's scope



---

### What scopes are for:
- Used to organize code
- Makes things simpler

---

# Global Scope

- A variable or function that can be accessed globally, within any part of your script
- It even applies across different files

---

# Local Scope

- A variable that is declared within a function that only exists inside that function
- Function parameters are also locally scoped

---

# Block Scope

- Other languages (e.g. Java, C++) use 'block scope', i.e. anything with curly braces 
- Within any "block" of code, for instance an `if` statement or `while` loop, variables will maintain separate values from globally scoped versions of the variable
- This concept does not exist in JavaScript.
**There is no block scope in JavaScript**

---

# Scoped Functions

- Scope also applies to functions
- a function which is nested inside another function is not visible outside the outer function

---

# Nested Scopes

- Scopes can be nested: You have access to variables defined in outer functions as well as the global scope.
- In other words: a function defined within another function has access to all the variables of that outer function as well as its own. 

---

# The Usefulness of Scopes

- Scopes allow third party libraries, like jQuery, to keep all their variables to themselves, exposing only what is needed
- Scopes allow you to keep unrelated parts of your code separate from each other, which makes things simpler and clearer.
  - Allows common variable names, like 'i', to be reused across different modules
  - Helps prevent accidental modification of unrelated modules during development
  - Keeps things "clean" when debugging - fewer available variables means fewer places to check for problems