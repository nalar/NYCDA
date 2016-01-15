autoscale: true
slidenumbers: true

# Breaking Down a Problem: Instapoll

https://github.com/j7caiman/instapoll

---

# Reading foreign code: what to look at
- the directory structure
- attempt to guess a file's purpose
- focus on blocks of code
- well written code will name functions and variables helpfully

---

# index.jade: Adding a new answer

```js
addAnswerDiv.click(function () {
	var newDiv = $(document.createElement("div"));
	newDiv.insertBefore(addAnswerDiv);

	var newLabel = $(document.createElement("label"));
	newLabel.html('answer #' + counter);
	newDiv.append(newLabel);

	var newAnswer = $(document.createElement("input"));
	newAnswer.attr('name', "answer_" + counter++);
	newDiv.append(newAnswer);
});
```

---

# app.js: Creating a Poll

```js
app.post('/', //...
	var question = request.body.question;
	//...
	var answers = [];
	//...

	Poll.create({
		question: question
	})
	//...
	response.redirect('/' + poll.id);
	//...
```

---

# app.js: Displaying a Poll

```js
app.get('/:id', //...
	//...
	Poll.findById
	//...
	response.render('results', {
		pollId: poll.id,
		question: poll.question,
		answers: answers
	});
});
```