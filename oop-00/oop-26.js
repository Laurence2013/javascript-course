function Person(name, address){
	const _name 		= name;
	const _address	= address;
	//const toString 	= () => `name: ${this.name}, address: ${this.address}`;
	const toString 	= () => `name: ${name}, address: ${address}`;

	return {_name, _address, toString};
}
function Employee(name, address, salary){
	const getAnualSalary 	= () => 12 * salary;
	
	return Object.assign({getAnualSalary}, Person(name, address));
}

const emp00 		= new Employee('Laurence', '23 Third Avenue', 26000);
const person00	= new Person('Tim', 'Carlson'); 

console.log(emp00.getAnualSalary());
console.log(emp00._name);
console.log(emp00._address);
console.log(emp00.toString());

console.log(person00.toString());
