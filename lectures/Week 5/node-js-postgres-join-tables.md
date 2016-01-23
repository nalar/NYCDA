autoscale: true
slidenumbers: true

---

# PostgreSQL: Join Tables

---

# Scenario
- Your application connects doctors with patients.
- Each doctor has several patients, and each patient has several doctors.
- How would this look in the database?

---

# Review: Many to One
- With hats and users, the user_id was stored in the hats table to link them.

---

# Join Table
- Doctors and Patients are connected though Appointments
- Here, doctor 1 has patients 1 and 2, and doctor 2 has patient 3

```
 doctor_id | patient_id
 ----------------------
 1		   | 1
 1         | 2
 2         | 3
```

---

# Exercise
- Think of a set of data that would require a join table.

---

# Exercise (continued)
- Create these tables and associations in postgreSQL.