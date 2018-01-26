var inquiry = require("inquirer");

function Programmer(name, position, age, language){
	this.name = name;
	this.position = position;
	this.age = age;
	this.language = language;
};
Programmer.prototype.printInfo = function(){
	console.log("Name: "+this.name);
	console.log("Position: "+this.position);
	console.log("Age: "+this.age);
	console.log("Language: "+this.language);
};
inquirer.prompt([
	{
		name: "name",
		message: "What's your name?"
	},
	{
		name: "position",
		message: "What's your current job?"
	},
	{
		name: "age",
		message: "How old are you?"
	},
	{
		name: "language",
		message: "What's your favorite programming language?"
	}
])
.then(function(response){
	var nextUser = new Programmer(response.name, response.position, response.age, response.language);
	nextUser.printinfo();
});













