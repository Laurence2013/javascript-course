function Users(fName, lName){
	this.fName = fName;
	this.lName = lName;
}

const user = Users('Laurence', 'Mitchell');
const user1 = new Users('Laurence', 'Mitchell');

console.log(user);
console.log(user1);
