function Minion(name='minion', hp=10){
	this.hp = hp,
	this.name = name,
	toString = () => this.name;
}

let minion00 = Minion();

console.log(minion00);
console.log(minion00.hp);
