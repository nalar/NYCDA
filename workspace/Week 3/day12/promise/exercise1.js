/////
// Exercise 1
// Change this function in to an promise
// function doWork(onComplete){
// 	setTimeout(function(){
// 		onComplete(input + " complete");
// 		}, 1000);
// }

var Promise = require('promise');

var doWorkPromise = new Promise(function(resolve, reject) {

	function doWork() {

		setTimeout(function() {
			resolve("Work complete!");
		}, 1000);

		// reject('Fail');

	};
	doWork();
});

doWorkPromise.then(console.log, console.log);