let minion = {
	hp: 10,
	name: 'minion',
	toString(){
		return this.name;
	}
};
let giantScorpion = {
	'__proto__': minion,
	name: 'giant scorpion',
	stings(){
		console.log(`${this} pierces your shoulders with venemous stings`);
	}
}
let smallScorpion = {
	'__proto__': minion,
	name: 'small scorpion',
	stings(){
		console.log(`${this} pierces your shoulders with venemous stings`);
	}
}
let giantSpider = {
	'__proto__': minion,
	name: 'giant spider',
	stings(){
		console.log(`${this} launches a sticky web and immobilises you`);
	}
}

minion.eats = function(food){
	console.log(`${this} eats ${food} and gains ${food.hp} health`);
	this.hp += food.hp;
}

giantScorpion.eats({name: 'hamburger', hp: 10, toString(){return this.name}});
smallScorpion.eats({name: 'ice cream', hp: 11, toString(){return this.name}});
giantSpider.eats({name: 'hamburger', hp: 100, toString(){return this.name}});
