# Reference Notes

---

# cURL: Summary
- cURL is a useful tool that is commonly used to make http requests from the command line.
- What you are most used to is having the browser make these requests, from the url bar
- Useful for debugging your web server

---

# Explanations
- The `-v` flag means "output a verbose response"
- cURL is more versatile than the browser, because it allows you quickly specify all the components of your request. Browsers primarily make GET requests.
- Secondly, when cURL receives a response, it simply outputs it to the console. A browser will follow all redirects, which may hide/confuse your expectations.
- The `-X` flag lets you specify the HTTP verb explicitly, i.e. GET, POST, PUT, DELETE, and some others