let Name = function(){
	this.fName = 'Laurence';
	this.lName = 'Mitchell';
}

Name.prototype.secName = 'Lorenzo'; 

let getName = new Name();

//getName.prototype.fName = 'Lorenzo';

console.log(getName.secName);
