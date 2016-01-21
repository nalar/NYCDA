autoscale: true
slidenumbers: true

# HTTP
- HTTP is a protocol used to communicate across the world wide web. All browsers support HTTP. Other protocols you might have heard of:
	- SSH: used to securely login to remote servers
	- IMAP: used to email clients to retrieve email

---

# URLs
- A URL is a string which identifies a particular resource on the server.
- The string you see in the browser at the top.

---

# Explanation
- http / https refers to the protocol used. 
- Note that the port number was not present. It defaults to 80. We'll use port 3000 initially.
- Note that putting an IP address into the browser is also valid. `74.125.224.72` goes to `google.com`. Every website has an IP address.
- Domain names must be registered with ICANN (https://www.icann.org/). It maps an IP address to a domain name, so your users don't have to remember your IP address.
- Subdomains are separated by periods and precede the domain name. Generally used to separate different parts of your web service.
- Routes (the path after the domain name) are used to respond to different resources.

---

# What is an "HTTP request" ?
An http request is a command from the client, often a browser to the server, which in our case is a node.js server, to perform an operation on a resource.
- a GET request typically asks for information, and often gets an HTML page back
- a POST request typically is used to tell the server to create something specified by the client. POST requests can contain data to be sent to the server.

---

# RESTful routing
- "Representational State Transfer"
- A suggestion on how to design your web server, widely implemented across most modern applications.
- A way to reuse the same / similar urls such that the HTTP verb represents the state of that object.
- Notice how there is a unique combination between the HTTP verb and the URL