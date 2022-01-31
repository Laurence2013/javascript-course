const theWizard = require('./oop-22a.js');
const theThief = require('./oop-22a.js');
const theBard = require('./oop-22a.js');

function Minion(name, hp){
	this.name = name;
	this.hp = hp;
}
Minion.prototype.toString = function(){
	return this.name;
}
var orc = new Minion('orc', 100);

var lightningSpell = function(target){
	console.log('A bolt of lightning electrifies ' + target + ' (-10hp)');
}

const wizard = theWizard.TheWizard('fire', 100, 'Randalf, the Red', 10);

wizard.castsSpell(lightningSpell, orc);
//var name = wizard.toString();
//console.log(name);
