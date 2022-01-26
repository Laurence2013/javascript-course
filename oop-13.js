const castSpells = require('./oop-14.js');
const steal = require('./oop-14.js');
const playMusic = require('./oop-14.js');
const byName = require('./oop-14.js');

class ClassyMinion {
	constructor(name, hp){
		this.name = name;
		this.hp = hp;
	}
	toString(){
		return this.name;
	}
}
class ClassyBard extends ClassyMinion{
	constructor(instrument, mana, name, hp){
		super(name, hp);

		this.instrument = instrument;
		this.mana = mana;
	}
}
Object.assign(ClassyBard.prototype, 
	castSpells.canCastSpells,
	steal.canSteal,
	playMusic.canPlayMusic,
	byName.canBeIdentifiedByName
);

function Minion(name, hp){
	this.name = name;
	this.hp = hp;
}
Minion.prototype.toString = function(){
	return this.name;
}

const lightningSpell = function(target){
	console.log('A bolt of lightning electrifies ' + target + '(-10hp)');
	target.hp -=10;
}

const orc = new Minion('orc', 100);

const anotherBard = new ClassyBard('guitar', 100, 'Jimmy Hendrix', 100);

anotherBard.steals('orc', 'silver coin');
anotherBard.castsSpell(lightningSpell, orc);
