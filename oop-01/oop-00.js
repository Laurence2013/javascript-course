function Vehicle(make, model, engine){
	this.make = make;
	this.model = model;
	this.engine = engine;
};
Vehicle.prototype.description = (description) => { return description };

let vehicle = new Vehicle('Toyota', 'Celica', '1.8 VVT-i 3dr');

console.log(vehicle.make);
console.log(vehicle.description('hello'));
