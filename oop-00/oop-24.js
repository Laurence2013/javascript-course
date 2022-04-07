function WalkingMinion(name='minion', hp=10){
	let position = {x: 0, y:0};

	this.name = name;
	this.hp = hp;
	this.walksTo = (x,y) => {
		console.log(`${this} walks from (${position.x}, ${position.y}) to (${x}, ${y})`);

		position.x = x;
		position.y = y;
	};
};

let walkingMinion = new WalkingMinion();

walkingMinion.walksTo(2,2);
walkingMinion.walksTo(3,3);
walkingMinion.walksTo(4,4);
