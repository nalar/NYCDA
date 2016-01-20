# Reference Notes

---

# Asynchronous and Event Driven
- All APIs of Node.js library are asynchronous, i.e. non-blocking.
- A Node.js based server never waits for an API to return data. It simply continues onto the next call. 
- Instead, the notification mechanism of Events in Node.js tells node when an API call has returned a response

---

# Single Threaded
- Simplifies development since only one thing can happen at a time.

---

# Other features
- Uses the Google Chrome's V8 JavaScript Engine, which compiles JavaScript to native machine code (e.g. x86-64)
- Released under the MIT license

---

# Callback review
- Callbacks are called after the calling function completes. Node.js architecture relies on this to do almost everything.
- The first example shows the typical structure of a function that has a callback, sometimes called "onComplete"
- The next examples show some common uses of API functions (some jQuery, some Node.js) that have a callback

---

# package.json

see: https://docs.npmjs.com/files/package.json
see: http://browsenpm.org/package.json