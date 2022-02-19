function Vehicle(vehicle){
	const vehicle00 = {
		...vehicle, 
		description(desc){ return desc }
	}
	return vehicle00;
};

const vehicle01 = {
	make(make00){ return make00 },
	model(model00){ return model00 },
	engine(engine00){ return engine00 }
};

const vehicle02 = Vehicle(vehicle01);

console.log(vehicle02.make('Toyota'));
console.log(vehicle02.model('Celica'));
console.log(vehicle02.make('1.8 VVT-i'));
console.log(vehicle02.description('Hello'));

