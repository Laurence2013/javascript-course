class ClassyMinion {
	constructor(name, hp){
		this.name = name;
		this.hp = hp;
	}
	toString(){
		return this.name;
	}
}
class ClassyWizard extends ClassyMinion {
	constructor(name, element, hp, mana){
		super(name, hp);

		this.element = element;
		this.mana = mana;
	}
	toString(){
		return super.toString() + ', the ' + this.element + ' Wizard';
	}
	castsSpell(spell, targe){
		console.log(this + ' casts ' + spell + ' on ' + target);

		spell(target);
	}
}
const classyOrc = new ClassyMinion('classy orc', 50);
const classyGandalf = new ClassyWizard(' Classy Gandalf', 'Grey', 50, 50);

console.log('classy Ganadalf is ClassyWizard: ' + classyGandalf instanceof ClassyWizard);
console.log('classy Ganadalf is ClassyMinion: ' + classyGandalf instanceof ClassyMinion);

