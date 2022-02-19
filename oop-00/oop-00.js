// Constructor function
function Minion(name, hp){
	this.name = name;
	this.hp = hp;
}
// Defining Minion prototype built-in method 
Minion.prototype.toString = function(){
	return this.name;
}
// Defining Minion prototype its own method, created by programmer
Minion.prototype.caseUpper = function(){
	return this.name.toUpperCase();
}

var orc = new Minion('orc', 100);

//console.log(orc);
//console.log(orc.toString());
console.log(orc.caseUpper());
