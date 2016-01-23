autoscale: true
slidenumbers: true

# Reference Notes

---

# Summary
- Most web services need to store data of some kind.
- We want to be able to connect to our database from our Node.js application
- Rather than figuring out all the complexity of doing that ourselves, we use a library to hook in for us.

---

# Read and Write Examples
- First we establish a connection to the database. The callback gives us a client from the connection pool with which to make queries.
- The 'connection string' determines which database we're accessing, as well as which pool we're pulling from.
- This is analogous to the `psql -d <database name>` command that we're used to from the terminal.

- Using the returned client, we can make postgres queries.
- Finally, we have to call 'done()' to release the client back to the connection pool once we're finished querying. Otherwise, the pool will run out of available clients.

---

# Parameterized Write Example
- Passing an array as the second parameter to the `client.query` call will substitute in those parameters to the query itself.
- Those parameters are substituted in order where a `$N` is present. The number of elements in your parameters array must match the number of `$1` elements in the query string.

- note: process.argv contains the arguments passed into the node app at runtime. The first two arguments are 'node' and the current working directory respectively, so we drop them with `splice`.

---

# Error Handling Example
- If something goes wrong with the database, we need to be able to handle it cleanly.
- Problems can occur in two places: first when we're establishing a connection to the database, and secondly when we're making a query.
- In either case, we need to decide what to do. Here we're simply returning from the function after calling `done`.
- Note that passing something into `done` tells the library to remove that client from the connection pool, since there waas a problem with it.
- With more sophisticated error handling, we would want to, at a minimum, log this error. We might also want to automatically send an email to the admin team running the server. If the site relies on having a working connection, we might want to put up a "under maintenance" page until the issue is resolved.

---

# Separate Adapter
- This allows us make queries without needing to worry about the connection pool code or leaking clients.
- It also keeps all the error handling in one place. This makes our queries clean and simple looking. Generally, this is the approach we want to use when connecting Node.js to a database directly.
- Next chapter: ORMs