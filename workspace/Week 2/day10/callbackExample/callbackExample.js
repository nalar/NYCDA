calculateSomething(2, 4, sum, outputStuff);
calculateSomething(2, 4, product, outputStuff);

function outputStuff(selectedOperation, finalAnswerFromCalculateSomething){
	console.log("+------------------------------------------------------+")
	console.log("+	The selected operation was: " + selectedOperation);
	console.log("+	The answer of that operation was: " + finalAnswerFromCalculateSomething);
	console.log("+------------------------------------------------------+")
};

function sum(a, b, onComplete){
	sumAnswer = a + b;
	onComplete(sumAnswer);
};

function product(a, b, callback){
	productAnswer = a * b;
	callback(productAnswer);
}

function calculateSomething(a, b, operation, onComplete){
	var finalAnswer;
	if(operation === sum){
		sum(a,b, function(resultFromSumFunction){
			finalAnswer = resultFromSumFunction;
			operationName = "Sum";
		})
	}
	if(operation === product){
		product(a,b, function(resultFromProductFunction){
			finalAnswer = resultFromProductFunction;
			operationName = "Product";
		})
	}
	onComplete(operationName, finalAnswer);
};