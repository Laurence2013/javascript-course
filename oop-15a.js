let Name = function(){
	this.fName = 'Laurence';
	this.lName = 'Mitchell';
}

let getName = new Name();

//getName.prototype.fName = 'Lorenzo';
getName.prototype.secName = 'Lorenzo'; 

console.log(getName.secName);
