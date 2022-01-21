function User1(){
	console.log(this);
}
function User2(fName, lName){
	this.fName = fName;
	this.lName = lName;
}

var user1 = User2('James', 'Davidson');
var user2 = new User2('James', 'Davidson');

console.log(user1);
console.log(user2);
