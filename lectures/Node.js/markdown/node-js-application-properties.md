autoscale: true
slidenumbers: true

# [fit] Application Properties and Input Parameters

---

# Environment Variables

- set them in your bash profile like so:

```bash
export SENDGRID_PASSWORD=not_password
```

- read them in your application from `process.env`

```js
var sendgridPassword = process.env.SENDGRID_PASSWORD
```

---

# Input Parameters

- pass them into your application at runtime.

```bash
node src/app.js 1000 apples
```

- read them from `process.argv`, which is an array containing the command line arguments.

```js
process.argv[0]; // where your "node" command resides
process.argv[1]; // is where your application resides
process.argv[2]; // 1000
process.argv[3]; // 'apples'
```

---

# Exercise
- set an environment variable in your bash profile called `APPLICATION_PORT` with a value of `80`
- create an application that reads this variable and prints it out.

---

# Exercise (continued)
- modify your application to print out each of the parameters passed into the command line.