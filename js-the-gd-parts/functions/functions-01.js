function hello(thing, anotherOne){
	console.log(this + 'says hello ' + thing + ': ' + anotherOne);
}

hello('Yehuda', 'world', 'testing');
