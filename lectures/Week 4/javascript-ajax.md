autoscale: true
slidenumbers: true

# AJAX Requests with jQuery

---

# Review: Regular HTTP requests
- GET request --> new page loaded
- POST request --> data uploaded, redirected to another page

---

# AJAX differences
- called from JavaScript
- response gets sent to the function callback

---

# GET Anatomy

```js
$.get("url", function(response, status) {
	// process response
});
```

---

# POST Anatomy

```js
$.post("url", data, function(response, status) {
	// process response
});
```

---

# GET JSON Data Example

---

# POSTing Data Example

---

# Reading the Documentation
- Break this down:
- from: http://api.jquery.com/jquery.get/

```js
jQuery.get( url [, data ] [, success ] [, dataType ] )
```

---

# Exercise
- Create a page that contains a horizontal strip of thumbnails to images, and a bottom panel which starts out empty.
- When a user clicks on an thumbnail, it should download the full sized version, then display it on the bottom panel.

---

# Exercise
- Create a "like" button for each image - every time a user clicks it, the number of likes gets increased by one.
- Store the number of likes in a .json file that's formatted as follows:

```js
{
	{ "filename" : "number of likes" },
	{ "filename2" : "number of likes" }
	...etc
}
```