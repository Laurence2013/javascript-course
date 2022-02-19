function Person(name){
	this.name = name;
}
Person.prototype.toString = function(){
	return `My name is ${this.name}`;
}
function PersonAge(name, age){
	Person.call(this, name);
	this.age = age;
}

PersonAge.prototype = Object.create(Person.prototype);
PersonAge.prototype.constructor = PersonAge;

PersonAge.prototype.toString = function(){
	return Person.prototype.toString.apply(this, arguments) + ` and my age is ${this.age}`;
}

PersonAge.prototype.license = function(licenseType){
	if(licenseType === 'Bike'){
		return `${this.name} is a ${licenseType} for Deliveroo`; 
	}	
	if(licenseType === 'Bicycle'){
		return `${this.name} is a ${licenseType} for Deliveroo`; 
	}
	return `${this.name} is a ${licenseType} for Deliveroo`; 
}

let person = new Person('Laurence');
let person1 = new PersonAge('Laurence', 26);

console.log(person1.toString());
console.log(person1.license('Bike'));
