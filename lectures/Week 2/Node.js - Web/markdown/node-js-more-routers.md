autoscale: true
slidenumbers: true

# Node.js: More Routers

---

# Dynamic Routes
- the expected route is: `localhost:3000/pickle/<param1>/<param2>`

```js
app.get('/pickle/:apple/:orange', function (request, response) {
	request.params.apple; // contains whatever was put for param1
	request.params.orange; // contains whatever was put for param2

	// ...
});
```

---

# Dynamic Route Example

---

# Request Object
- request.body: POST request data (remember to use a body parser)
- request.query: URL query parameters
- request.params: URL parameters

---

# Response Object (review)
- response.send: send function contents to client
- response.render: send function contents to view engine, render Jade template, send result to client

---

# Response Object: redirect
- response.redirect: hit specified route on server

```js
response.redirect('/path/to/route');
```

---

# RESTful Route Example (revisited)
