var Person = function(name, yob, job){
	this.name = name;
	this.yob = yob;
	this.job = job;
}

Person.prototype.toString = function(){
	console.log(this.name + ' ' + this.job);
}

console.log(Person);

var test1 = Person('Lozza', 1985, 'Developer');
var test2 = new Person('Lozza', 1985, 'Developer');

console.log(test1);

console.log(test2);
console.log( Person.prototype.hasOwnProperty('job') );
console.log( Person.hasOwnProperty('job') );
test2.toString();

console.log(Person.prototype);
console.info(test1);
