const theWizard = require('./oop-06.js');
const theThief = require('./oop-06.js');
const theBard = require('./oop-06.js');

function Minion(name, hp){
	this.name = name;
	this.hp = hp;
}
function Wizard(name, element, hp, mana){
	Minion.call(this, name, hp);

	this.element = element;
	this.mana = mana;
}

Wizard.prototype = Object.create(Minion.prototype);
Wizard.prototype.constructor = Wizard;

Wizard.prototype.castsSpell = function(spell, target){
	console.log(this + ' casts ' + spell + ' on ' + target);
	this.mana -= spell.mana;
	spell(target);
}
Wizard.prototype.toString = function(){
	return Minion.prototype.toString.apply(this, arguments) + ', the ' + this.element + ' Wizard';
}

Minion.prototype.toString = function(){
	return this.name;
}
Minion.prototype.caseUpper = function(){
	return this.name.toUpperCase();
}

const wizard = theWizard.TheWizard('fire', 100, 'Randalf, the Red', 10);
const thief = theThief.TheThief('Locke Lamora', 100);
const bard = theBard.TheBard('lute', 100, 'Kvothe', 100);

var orc = new Minion('orc', 100);

var lightningSpell = function(target){
	console.log('A bolt of lightning electrifies ' + target + '(-10hp)');
	target.hp -=10;
}

lightningSpell.mana = 5;
lightningSpell.toString = function(){ return 'lightning spell' };

wizard.castsSpell(lightningSpell, orc);

thief.steals('orc', 'gold coin');

bard.castsSpell(lightningSpell, orc);
bard.steals('orc', 'sandwich');
bard.playsMusic();
