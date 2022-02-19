const castsSpells = require('./oop-22.js');
const canSteal = require('./oop-22.js');
const playMusic = require('./oop-22.js');
const byName = require('./oop-22.js');

function TheWizard(element, mana, name, hp){
	const wizard = {element, mana, name, hp};
	Object.assign(wizard, byName.canBeIdentifiedByName, castsSpells.canCastsSpells);

	return wizard;
}
function TheThief(name, hp){
	const thief = {name, hp};
	Object.assign(thief, byName.canBeIdentifiedByName, canSteal.canSteal);

	return thief;
}
function TheBard(instrument, mana, name, hp){
	const bard = {instrument, mana, name, hp};
	Object.assign(bard, byName.canBeIdentifiedByName, canSteal.canSteal, castsSpells.CanCastsSpells);

	return bard;
}

module.exports = {
	TheWizard,
	TheThief,
	TheBard,
}

