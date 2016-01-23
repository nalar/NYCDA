autoscale: true
slidenumbers: true

---

# Reference Notes

- A column in a table can only store a single value. Thus, when an object has several of one entity, that must go inside a new table, where it can consume multiple rows.
- If two entities both have an arbitrary number of references to each other, a third table, called a join table, is needed, where each row contains the primary key for the two objects.

---

# Examples

- Uber, the taxi service: Each driver carries multiple riders, and each rider rides in multiple cars. The join table would be a record of each ride, containing the id of the client, the driver, and the trip details.
- Amazon: Each product has several categories associated with it, and each category contains several products. The join table is needed to be able to display all the products belonging to one category.
