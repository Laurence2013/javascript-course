function Minion(name, hp){
	this.name	= name;
	this.hp		= hp;
}
function Wizard(name, element, hp, mana){
	Minion.call(this, name, hp);

	this.element 	= element;
	this.mana 		= mana;
}
Wizard.prototype = Object.create(Minion.prototype);
Wizard.prototype.constructor = Wizard;

Wizard.prototype.castSpells = function(spell, target){
	console.log(this + ' casts ' + spell + ' on ' + target);

	this.mana -= spell.mana;
	spell(target);
}
/*Wizard.prototype.toString = function(){
	return Minion.prototype.toString.apply(this, arguments) + ',the ' + this.element + ' Wizard';
}*/
Wizard.prototype.toString = function(){
	return this.name + ', the ' + this.element + ' Wizard';
}
Minion.prototype.toString = function(){
	return this.name;
}
Minion.prototype.upperCase = function(){
	return this.name.toUpperCase();
}

var orc 		= new Minion('orc', 100);
var gandalf = new Wizard('Gandalf', 'Grey', 50, 50);

var lightningSpell = function(target){
	console.log('A bolt of lightning electrifies ' + target + '(-10hp)');

	target.hp -= 10;
}
lightningSpell.mana = 5;
lightningSpell.toString = function(){ return 'lightning spell' };

gandalf.castSpells(lightningSpell, orc);

