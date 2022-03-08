'use strict'

function WalkingMinion(test, name, hp){
	let position = {x: 0, y: 0};

	this.test = test;
	this.hp		= hp;
	this.name = name;

	this.toString = () => this.test;
	this.walkTo = (x, y) => {
		console.log(`${this} walks from (${position.x}, ${position.y}) to (${x}, ${y})`);

		position.x = x;
		position.y = y;
	};
}

let walkingMinion = new WalkingMinion('Test', 'Minion', 10);

console.log(walkingMinion.walkTo(3,3));
