autoscale: true
slidenumbers: true

---

# Reference Notes: RequireJS
- Most "real" programming languages have a built in way to include files
- JavaScript, traditionally, just concatenated all the files together
- RequireJS is a clever module that allows you to build/include different pieces of functionality into your applications

---

# What was wrong with the old way?
- The order in which files are included mattered, and doing it the wrong way would break the code
- If two global variables in two different files were named the same, they would conflict and break things

---

# Where does Require.JS look?
- long answer: https://nodejs.org/api/modules.html#modules_all_together
- short answer:
	- `node_modules` for when no path is passed into the require call
	- otherwise, opens the file from the specified path

