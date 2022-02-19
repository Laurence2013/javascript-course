/*function Person(name, address){
	const _name 		= name;
	const _address	= address;
	const toString 	= () => `name: ${name}, address: ${address}`;

	return {_name, _address, toString};
}*/
function Person(name, address){
	this.name 		= name;
	this.address	= address;
	this.toString = () => `name: ${this.name}, address: ${this.address}`;

	return {name, address, toString};
}

const emp00 = new Person('Laurence Mitchell', '123 Some Address');

console.log('myPerson :', emp00);
console.log('myPerson + "" :', emp00 + "");
