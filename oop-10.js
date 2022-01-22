var personProto = {
	calculateAge: function(){
		console.log(2016 - this.yob);
	}
}

var john = Object.create(personProto);

john.name = 'John';
john.yob = 25;
john.job = 'teacher';

john.calculateAge();
