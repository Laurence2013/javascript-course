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

module.exports = {
	canCastSpells,
	canSteal,
	canPlayMusic,
	canBeIdentifiedByName
}

