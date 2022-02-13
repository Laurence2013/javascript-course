let minion = {
	hp: 10,
	fName: 'Laurence',
	lName: 'Mitchell',
	toString(){
		return this.fName;
	}
};
let giantScorpion = {
	'__proto__': minion,
	
}
