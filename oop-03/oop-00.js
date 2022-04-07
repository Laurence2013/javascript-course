function Minion(name, hp){
	this.name	= name;
	this.hp		= hp;
}
Minion.prototype.toString = function(){
	return this.name;
}
Minion.prototype.upperCase = function(){
	return this.name.toUpperCase();
}

var orc = new Minion('orc', 100);

console.log(orc);
console.log(orc.toString());
console.log(orc instanceof Minion);
console.log(orc.upperCase());
