function Person(name, address){
	const _name 		= name;
	const _address	= address;
	const toString 	= () => `name: ${name}, address: ${address}`;

	return {_name, _address, toString};
}
function JobDescription(job){
	const description = () => `Job is: ${job}`;

	return {description};
}
function Employee(name, address, job, salary){
	const getAnualSalary = () => `Salary is: ${12 * salary}`;
	
	return Object.assign({getAnualSalary}, JobDescription(job), Person(name, address));
}

const emp00 = new Employee('Laurence', '23 Third Avenue', 'Software Developer', 26000);

console.log(emp00.toString());
console.log(emp00.getAnualSalary());
console.log(emp00.description());

