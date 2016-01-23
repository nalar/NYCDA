autoscale: true
slidenumbers: true

# Reference Notes
- http://www.postgresql.org/docs/8.2/static/index.html

---

# Introduction to Databases
- just about every application needs a database to store its data
- commonly stored data:
	- user data of users
	- recording current inventory, if the business is selling physical products
	- analytics data, if the business is selling data itself
	- recording monetary transactions
	- storing photos, videos, or other digital data

---

# Relational Databases
- commonly represented as tables
- have `rows` and `columns`
- each row represents one record of data
- each column represents one attribute type on the data

---

# Constraints
- http://www.postgresql.org/docs/9.3/static/ddl-constraints.html
- unique: the value in each field cannot exist anywhere else in the table
- non-null: field must contain a value
- both together form a `primary key`

---

# Foreign Key Constraints
- http://www.postgresql.org/docs/9.3/static/ddl-constraints.html
- "references <table name>": the value in the field must be equal to an existing entry in the other table. Note that the value is still allowedto be empty.