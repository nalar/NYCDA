autoscale: true
slidenumbers: true

# Jade


# Terser Syntax

---

```html
html
	head
	body
		p This might seem more complicated initially, but it will
		br
		p save you time when you're developing larger projects.
```

becomes

```html
<html>
	<head></head>
	<body>
		<p>This might seem more complicated initially, but it will</p>
		<br>
		<p>save you time when you're developing larger projects.</p>
	</body>
</html>
```

---

# Example: Simple

---

# Example: Variables

---

# Example: Intermediate
- conditionals
- loops
- server side JavaScript
- string interpolation

---

# Exercise
- Create a Node.js application that has one route that reads in the colors.json file.
- It should then send this data to a Jade template.
- The template should list each of the colors, and the color listed should be in the color of the hexValue value.
	- hint: use `<font color="#770077">`, except splice in the hex value from the server.  