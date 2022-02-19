function Car(make, model, year){ 
	this.make = make;
	this.model = model;
	this.year = year;
}
function Price(carNew = '', carUsed = '', price){
	this.carNew = carNew;
	this.carUsed = carUsed;
	this.price = price;
}
function KeySpecs(bodyType, mpg, seats, driveType, length, height){
	this.bodyType = bodyType;
	this.mpg = mpg;
	this.seats = seats;
	this.driveType = driveType;
	this.length = length;
}
function Overview(good, bad){
	this.good = good;
	this.bad = bad;
}

let overview = new Overview(['test1', 'test2'], ['test3', 'test4']);

console.log(overview.good);
