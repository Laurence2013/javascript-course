function Vehicle(make, model){
	this.make = make;
	this.model = model;
};
function VehicleInfo(make, model, condition, year, price, pics){
	this.condition = condition;
	this.year = year;
	this.price = price;
	this.pics = pics;

	let vehicle = new Vehicle(make, model);	


	return Object.assign({condition, year, price, pics}, vehicle)
};

let info = VehicleInfo('Toyota', 'Celica', 'Used', 2005, 2500, true);

console.log(info.make);
console.log(info.condition);
console.log(info.year);
console.log(info.price);
console.log(info.pics);
