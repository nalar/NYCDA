function bloopAppender(word){
	return(word+"bloop");
};

function doubler(word){
	return(word+word);
};

function changeString(word, firstOperation, secondOperation){
	var modifiedWord = word;
	modifiedWord = firstOperation(modifiedWord);
	modifiedWord = secondOperation(modifiedWord);
	console.log(modifiedWord);
}

changeString("I'm a fish!", bloopAppender, doubler);
changeString("I'm a fish!", doubler, bloopAppender);
changeString("I like bloops!", bloopAppender, bloopAppender);
changeString("wurzle_flurble_", doubler, doubler);