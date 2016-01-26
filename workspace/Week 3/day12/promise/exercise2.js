/////
// Exercise 2
// Change this function in to an promise
// function doWork(input, onComplete){
// 	setTimeout(function(){
// 		onComplete(input + " complete");
// 		}, 1000);
// }

var Promise = require('promise');

function createPromise(input) {
	var doWorkPromise = new Promise(function(resolve, reject) {

		function doWork() {

			setTimeout(function() {
				resolve(input + "work complete!");
			}, 1000);

			// reject('Fail');

		};
		doWork();
	});
	return (doWorkPromise);
};

doWorkPromise = createPromise("This epic ");
doWorkPromise.then(console.log, console.log);