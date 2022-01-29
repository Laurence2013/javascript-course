function Minion(fName, lName){
	this.fName = fName;
	this.lName = lName;
}
Minion.prototype.toString = function(){
	console.log(`My name is ${this.fName} ${this.lName}`);
}

function JobDesc(fName, lName, age, jobTitle, salary){
	Minion.call(this, fName, lName);
	this.age = age;
	this.jobTitle = jobTitle;
	this.salary = salary;
}
JobDesc.prototype.toString = function(){
	Minion.prototype.toString.apply(this, arguments) + ` my age is ${this.age}`;
}

JobDesc.prototype = Object.create(Minion.prototype);
JobDesc.prototype.constructor = JobDesc;

let jobDesc = new JobDesc('Laurence', 'Mitchell', 36, 'Delivery Driver', 18000);

jobDesc.toString();
