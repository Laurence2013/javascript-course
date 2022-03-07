'use strict'

let minion = {
	hp: 10,
	name: 'minion',
	test: 'test',
	toString(){
		return this.name;
	}
}

let giantScorpion = {
	'__proto__': minion,
	name: 'scorpion',
	stings(){
		console.log(`${this} pierces your shoulders with venemous sting`);
	}
}

console.log(`giant scorpion has ${giantScorpion.hp} hit points`);

giantScorpion.stings();
