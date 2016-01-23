autoscale: true
slidenumbers: true

# [fit] Cookies! (om nom nom)

---

# js-cookie
- https://github.com/js-cookie/js-cookie

---

# Usage (client side)

```js
Cookies.set('name', 'value', { expires: 7 }); // expires in 7 days

Cookies.get('name'); // => 'value'
```

---

# Exercise
- Create an express server.
- Using a cookie, say "Welcome!" if the user has never been to the site before, or "Welcome back!!", if the user has.
- Set the cookie's name to "visited" and the value to "true".
- Note that the cookie is both set and read by the browser, on the client. The server is never aware of it.

---

# Usage (server side)
- Note: Here, we are configuring it to be used globally, but, like `body-parser`, you can use it as middleware for a single route.

```js
var express      = require('express');
var cookieParser = require('cookie-parser');
 
var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies);
});
```