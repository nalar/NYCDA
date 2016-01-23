autoscale: true
slidenumbers: true

# Reference Notes

---

# What is routing?
- Routing refers to how a web service responds to an HTTP request sent by a client to a particular URI.
- A router, in the node.js world, is something that will operate on a resource when it receives a request from a client.

---

# Example: Get Request
- `app.get` takes two parameters.
	- first one: the resource URL
	- second one: function to be called if a client requests this URI.
	- this function contains the 'request' object, which contains query parameters, cookies, and other exciting things, and the 'response' object, which you populate and express uses to send a response back to the client.
	
---

# Example: Post Request
- The POST data sent up is converted into a JavaScript object for us to use.
- Normally, a POST request would be used to update a database.
- For now, we just return it in the response to show that express received it.

---

# Example: Post Request with JSON
- Headers are used to specify metadata about the request. Headers are sent all the time. We're explicitly telling the server that the format of our data is JSON.
- JSON is similar to a JavaScript object, but is not quite the same! Surround all property keys and values with double quotes.
- Note that the middleware was moved to within the route, so it will only apply to that route. The prior example used it globally, so all routes would have been using that middleware. This is simply to show that it is possible to do so.

---

# Static Content
- Just about everything you have built so far consists solely of static content.
- Static content refers to anything that can be passed from the server to the client without doing anything else.
- Common examples:
	- Images / Video
	- HTML/JavaScript where the server doesn't need to first read / process data
	- CSS
- You don't need a route to serve static content.
- If you don't override it, the default route '/' will look for index.html.