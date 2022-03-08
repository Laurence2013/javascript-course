function Person(name, address){
	return {
		name, 
		address,
		toString: function(){
			return `name: ${this.name}, address: ${this.address}`
		}
	}
}

const myPerson = Person('John Doe', '123 Main St Anytown'); 

console.log('myPerson :', myPerson); 
console.log('myPerson + "" :', myPerson + ""); 

// There is no inheritance involved for 
// any object created by the above factory. 

console.log('Object.keys(myPerson) :', Object.keys(myPerson)); 

console.log("myPerson.hasOwnProperty('toString') ?", myPerson.hasOwnProperty('toString')); 

console.log("(Object.getPrototypeOf(myPerson) === Object.prototype) ?",   
	(Object.getPrototypeOf(myPerson) === Object.prototype));

