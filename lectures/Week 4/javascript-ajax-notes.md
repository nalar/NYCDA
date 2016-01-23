autoscale: true
slidenumbers: true

# Reference Notes

---

# Summary
- AJAX requests allow you to make http requests from within your scripts.
- Most single page applications make use of this extensively.

---

# Summary (continued)
- the `XMLHttpRequest` global object is supported in all major browsers, and allows the client to make http requests.
- jQuery wraps this object with its own method, called `$.ajax()`, making it simple to create http requests.
- instead of rendering a new page after the http request, the response from the server gets sent to the callback function. 

---

# GET
- `$.get()` and `$.post()` are shorthand to call the `$.ajax()` with GET and POST requests, respectively.
- `$.get()`: http://api.jquery.com/jquery.get/
- `$.post()`: http://api.jquery.com/jquery.post/