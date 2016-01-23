autoscale: true
slidenumbers: true

# [fit] PostgreSQL: Node.js Client

---

# Read Example

---

# Write Example

---

# Substituting Parameters Example
- What does this query return?

```js
client.query('select * from hats where material = $1', ['felt'], function(err, result) {

});
```

---

# Exercise
- Create a Node.js application that takes in one parameter from the command line `(process.argv[2])`, which is a user's name.
- It then finds all the hats that belong to that user.

---

# Error Checking Example

---

# Separate Adapter Example
