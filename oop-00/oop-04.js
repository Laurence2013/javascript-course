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

const canCastSpells = {
	castsSpell(spell, target){
		console.log(this + ' casts ' + spell + ' on ' + target);

		this.mana -= spell.mana;
		spell(target);
	}
};
const canSteal = {
	steals(target, item){
		console.log(`${this} steals ${item} from ${target}`);
	}
};
const canPlayMusic = {
	playsMusic(){
		console.log(`${this} grabs his ${this.instrument} and starts playing music`);
	}
};
const canBeIdentifiedByName = {
	toString(){
		return this.name;
	}
}

function TheWizard(element, mana, name, hp){
	const wizard = { element, mana, name, hp };
	Object.assign(wizard, canBeIdentifiedByName, canCastSpells);

	return wizard;
}
function TheThief(name, hp){
	const thief = { name, hp };
	Object.assign(thief, canBeIdentifiedByName, canSteal);

	return thief;
}
function TheBard(instrument, mana, name, hp){
	const bard = { instrument, mana, name, hp };
	//Object.assign(bard, canBeIdentifiedByName, canSteal, canCastSpells);
	Object.assign(bard, canBeIdentifiedByName, canSteal, canCastSpells, canPlayMusic);

	return bard;
}

const wizard = TheWizard('fire', 100, 'Randalf, the Red', 10);
const thief = TheThief('Locke Lamora', 100);
const bard = TheBard('lute', 100, 'Kvothe', 100);

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
