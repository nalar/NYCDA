autoscale: true
slidenumbers: true

---

# Node.js: Routers

---

# Example: Simple GET Request

```js
// in app.js
app.get('/myFirstRoute', function(request, response) {
	response.send('<body><h1>hello everyone!</h1></body>');
});
```

---

# Example: GET Request with query parameters
- query parameters are accessed from the `request.query` object

---

# Exercise
- Create an Express application that has two routes.
- The first route should respond to GET requests at '/'. Respond with a greeting.
- The second route should respond to GET requests at '/messages'.
- It should look for the "message_1" and "message_2" query parameters, then repeat the messages back to the user in the response.
- Bonus: Change the route to accept any number of messages.

---

# Example: POST Request
- Middleware is needed to parse the post data.

---

# Example: POST Request with JSON

---

# Exercise
- Add a route to your previous Express application that accepts a POST request at '/messages'.
- Respond the same way: repeat the messages back. Test your route with cURL.
- Bonus: extract the code that responds into a function, then use that function in both the GET messages and POST messages routes.

---

# Example: Static Content
