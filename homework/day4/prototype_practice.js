function EmailList(name) {
	this.name = name;
	this.list = [];
}

EmailList.prototype.addEmail = function(address) {
	this.list.push(address);
}

EmailList.prototype.sendEmailToAll = function(text) {
	console.log("Email content:");
	console.log(text);
	console.log("Sending email to:");
	console.log(this.list);
}

var myList = new EmailList("myList");
myList.addEmail("thijstel@gmail.com");
myList.sendEmailToAll("This is a test message to check if the function is working properly!")