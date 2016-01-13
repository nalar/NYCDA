function fibonnaci(a,b,maxNum){
	var c = 0;
	var count = 0;
	while(count < maxNum-2){
		c = a+b;
		console.log(c);
		a = b;
		b = c;
		count++;
	}
}