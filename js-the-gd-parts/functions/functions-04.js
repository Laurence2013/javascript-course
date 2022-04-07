var person = {
	name: 'Brendan Eich',
	hello: function(thing){
		console.log(this.name + ' says hello ' + thing);
	}
}

var boundHello = person.hello.bind(person);

boundHello('world');
