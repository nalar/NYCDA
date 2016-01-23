autoscale: true
slidenumbers: true

# ORM
- Object-relational mapping
- A way to access and manipulate your database without having to write SQL queries

---

# Sequelize
- Promise based ORM
- Read from, write to, and modify PostgreSQL tables with JavaScript

---

# Model.create()
- takes in an object that contains key/value pairs of column name/values, then uses that to execute an SQL query:

```js
User.create({
	email: 'bloop@bleep.com',
	username: 'bloop_bloop'
})
```

- becomes:

```
INSERT INTO "users" ("id","email","username")
	VALUES (DEFAULT,'bloop@bleep.com','bloop_bloop') RETURNING *;
```

---

# Model.findAll()

```js
User.findAll().then(function(rows) {
	for(var i = 0; i < rows.length; i++) {
		var columnData = rows[i].dataValues;
		var email = columnData.email;
		var username = columnData.username;
	}
};
```

- becomes:

```
SELECT "id", "email", "username" FROM "users" AS "user";
```

---

# Model.findById(1)

```
User.findById(id).then(function (row) {
	var email = row.dataValues.email;
	var username = row.dataValues.username;
});
```

- becomes:

```
SELECT "id", "email", "username" FROM "users" AS "user" WHERE "user"."id" = 1;
```

---

# Simple Post Example

---

# Simple Read Example

---

# RESTful Route Example (revisited)

---

# Exercise
- Compare/contrast your "ORM-lite" assignment to Sequelize.
- What are some advantages / disadvantages of each?
- If we were to take Sequelize as a more evolved manifestation of the ORM-lite assignment, what has changed?

---

# Exercise
- Update your Bulletin Board application to use Sequelize.
- Remember to make a new git branch so your old work is still available to be reviewed / graded.