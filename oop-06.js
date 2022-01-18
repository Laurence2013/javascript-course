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
	Object.assign(bard, canBeIdentifiedByName, canSteal, canCastSpells, canPlayMusic);

	return bard;
}

module.exports = {
	TheWizard,
	TheThief,
	TheBard
}
