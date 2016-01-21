autoscale: true
slidenumbers: true

---

# Node.js: More Routers

---

# Dynamic Routes
- Dynamic routes allow parts of the route itself to be used as parameters

---

# Dynamic Routes Example / request.params:
- `/users/:id` is a route to show any given user
- When the client hits `http://localhost:3000/users/10`, the router now has a parameter `id` with value `10`.
- The code within the router looks up the user with id `10` and returns a page showing that user to the client.
- these parameters are stored in `request.params`

---

# request.query
- This contains to the "query parameters".
- for example: http://example.com?referral=index&newUser=true
	- the query parameters are: `referral`, with value `index` and `newUser` with value `true`
	- everything after the question mark is a query parameter - each parameter is separated by an `&` and follows the `name=value` pattern

---

# request.body
- This contains the data sent in a POST request.
- Post requests default to urlencoded (i.e. name=value&name2=value2), but you can send it in a different format, provided you set the `Content-Type` headers in your POST request.
- Choose your bodyParser based on the encoding, so that it correctly decodes your POST body.

---

# Redirect vs Send/Render
- Both `send` and `render` hit the client.
- `redirects` take in a url as a parameter. Then, the router makes a new request to that url.
- This url can be to an external site, but usually it's to another route within the server.
- Once the redirect goes off, the route that was specified now handles the response to the client.

---

# Redirect example:
- When the client makes a POST request to create a user, we redirect to that user's `show` view.
- This way, the client gets sent to that user's page after creating it, and his URL bar shows `users/<id>` 
