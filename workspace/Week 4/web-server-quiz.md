Instructions:

- Add your answers inline to the markdown file.
- Use your own words.
- Come up with an answer from memory. Write it down, even if the answer is "I don't know."
- Then, we will go over the answers in class. Write down your revised answer below your original answer.
- There are two intermissions. We
 will go over the answers to the previous parts during those times.
- Finally, submit all of your answers in a file to canvas. This is so Lloyd and I can get a sense of your understanding.

---
### Part 1: Servers - 20 minutes

1. What is a server? What does a server do?
A server is a computer connected to a network which is listening to requests on a certain port and will do something (e.g. respond) when a request arrives.

2. What is Node.js?
Node.JS is a javascript framework which enables you to use javascript on the back-end of a web service.

++ Event based & async

3. What is express?
Express is a node.js module which makes it easy to set up a server using node.

++ Framework using node's http module to make servers

4. What is a client? What does a client do?
A client is a computer that makes a connection and requests to a server. A client communicates with the server.

5. How do the server and the client communicate?
Client and server communicate using one or multiple protocols such as http, ftp or ssh.

6. Debugging:
- 6a. How do you view server logs?
Depending on what server software you are using the logs will be in different places, when using express/nodejs you can often view the logs just in the terminal window where it is running.
- 6b. How do you view client logs?
In Google Chrome the easiest way is to use the inspector/dev console

---
### Part 2: HTTP Requests - 15 minutes

1. What is an HTTP Request?
A HTTP request is a packet from the client to the server in which a request is made to obtain or send data from or to the server.

2. GET Requests
- 2a. What is a GET request?
A GET request is a type of http request which requests data from the server.
- 2b. When do you use GET requests?
You use a GET request when requesting a page or file from the server
- 2c. How do you send data in a GET request?
The most commonly used way to send data in a get request is using query parameters

3. POST Requests
- 3a. What is a POST request?
A POST request to a server is a request that is specifically ment to send data to the server.
- 3b. When do you use POST requests?
When you submit a form or want to send data to the server.
- 3c. How do you send data in a POST request?
Using input values from a form sent in the body

---

### Intermission

---
### Part 3: Ajax - 15 minutes

1. Ajax
- 1a. What is Ajax?
AJAX is asynchronous javascript and xml, a method to obtain data from the server without having to refresh the current page.
- 1b. When should you use Ajax?
When you want to collect new data from or send data to the server without having to reload the page (realtime)

2. Given the following code snippet:

```js
console.log("A");
$('#map').click(function(event) {
	console.log("B");
	var coordinates = convertMouseCoordinatesToGeoCoordinates(event);

	console.log("C");
	$.get('/map', { lat: coordinates.x, lon: coordinates.y }, function(response, status) {
		console.log("D");
		mapDisplay.update(response);
	});
	
	console.log("E");
});
console.log("F");
```

- 2a. Describe what seems to be happening.
A click listener is added to a div with the ID map. When someone clicks the div the mouse coordinates are converted to geographical coordinates. An ajax request is made to the /map route for the clicked coordinates and the response is used to update the map.
- 2b. In what order is `A` through `F` printed?
A and F are printed first, without any user interaction. After the user clicks B, C and E are printed. D is printed whenever the get request to /map has been finished.

- 2c. Describe the events that happen between each letter. When does the server get hit?
The server gets hit after a click  (after letter C)

---

### Intermission

---
### Part 4: Jade - 20 minutes

1. Jade
- 1a. What is Jade?
Jade is a template engine for express to make the front-end development of the service quicker
- 1b. Why should we use Jade?
It's clean, quick and has good integration with express

2. Explain the difference between 'server side' JavaScript and 'client side' JavaScript.
Server side javascript is, in the case of node, executed by node on the server side. The client has no access to what's happening here, unless specifically granted. Client side javascript is executed by the client's browser, per example Google Chrome.

3. Given this example `index.jade` file:

```js
doctype html
html
	head
		script(src='boop.js')
		script.
			var x = 1;
	body
		- var y = 2;
		h2= z + y
```

- 3a. Is `x` executed server side or client side? Does the client ever see `x`?
client / yes
- 3b. Is `y` executed server side or client side? Does the client ever see `y`?
server / no
- 3c. Is `z` executed server side or client side? Does the client ever see `z`?
serverside / no
- 3d. When is `boop.js` executed? Does the client ever see `boop.js`?
On the load of the page, and it is run client side.

---
### Part 5: Request Lifecycle - 15 minutes

5. Given the following code snippet in an express application:

```js
app.get('/home', function (request, response) {
	response.render('index', { z: 3 } );
});
```

- 5a. List the complete order of events, starting from the browser making a `GET` request to `/home`. Assume that `index` refers to the Jade file in Part 3. Be sure to describe when each JavaScript statement (`x`, `y`, `z`, and `boop.js`) gets executed.

+ Get request send
+ Route gets hit
+ Response.render called for index.jade with z value of 3
+ Jade loads index.jade
+ Script boop.js exectued
+ x = 1 defined
+ y = 2 defined
+ h2 with z (which is called from the server) plus y

- 5b. What is displayed on the page?
5

- 5c. What is visible from 'view page source'?
<!-- Doctype HTML --><html><head><script src="boop.js"><script>var x = 1;</script><body><h2>5</h2></body></html>