class Person {
	constructor(name, address){
		this.name = name;
		this.address = address;
	}
	toString(){
		return `name: ${this.name} address: ${this.address}`;
	}
}

const myPerson = new Person('John Doe', '123 Some Address');

console.log(Object.keys(myPerson));
console.log('\n');
console.log(myPerson.hasOwnProperty('toString'));
console.log(Person.hasOwnProperty('toString'));
console.log(Person.prototype.hasOwnProperty('toString'));
console.log('\n');
console.log(myPerson.toString());
console.log('\n');
console.log(Person.prototype.toString.call(myPerson));
console.log('\n');
console.log(Person.prototype.toString.call({
	name: 'Laurence Mitchell',
	address: '456 Some Address'
}));
console.log('\n');

const myPerson00 = Person.prototype.toString.call({
	name: 'Craig Write',
	address: '789 Some Address'
});

console.log(myPerson00);
