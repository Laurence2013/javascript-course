class ClassyMinion{
	constructor(name, hp){
		this.name = name;
		this.hp = hp;
	}
	toString(){
		return this.name;
	}
}
const classyOrc = new ClassyMinion('classy orc', 50);
console.log(classyOrc);
console.log(classyOrc.toString());
console.log('classy orc is a ClassyMinion: ' + (classyOrc instanceof ClassyMinion));
