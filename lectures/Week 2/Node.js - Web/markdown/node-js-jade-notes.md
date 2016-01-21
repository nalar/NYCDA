autoscale: true
slidenumbers: true


# Reference Notes
- http://jade-lang.com/
- Play with the content on the left to see what gets rendered on the right.
- Think of Jade as a faster way of writing HTML, with a lot of fancy extra features that connect it to your router.
- http://expressjs.com/en/guide/using-template-engines.html

---

# Summary
- The view engine reads your Jade on each request and renders it into HTML. Then, it sends that HTML to the client.
- Whitespace is important syntax! Two elements at the same level of indentation share the same parent. More indented lines are child nodes.
- Variables are Jade's true power. They allow you to create views dynamically.
- Jade supports conditional statements, looping, and inlined JavaScript to give you total control of what that page will look like.

---

# Request Lifecycle
- Client (i.e., a user's browser) sends a requests to the Node server.
- The router processes the request, and sends information to the Jade template.
- The view engine processes the Jade template, using the information sent from router, and compiles it into an HTML file.
- That file gets sent to the client (the browser), which renders it to the user. 

---

# Client-side JavaScript versus Server-side JavaScript
- Once a page has been rendered (i.e. the Jade has been turned into HTML), it does not communicate with your server until the browser initiates a new request.

---

# Resources:
- inline server side JavaScript: http://jade-lang.com/reference/code/
- string interpolation: http://jade-lang.com/reference/interpolation/
- loops: http://jade-lang.com/reference/iteration/
- conditional statements: http://jade-lang.com/reference/conditionals/
- extending a file: http://jade-lang.com/reference/extends/