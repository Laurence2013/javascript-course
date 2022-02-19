const carInfo = require('./oop-21a.js');
const carPrice = require('./oop-21a.js');
const keySpecs = require('./oop-21a.js');
const carOverview = require('./oop-21a.js');

function InfoPrice(make, model, year, newCar, usedCar, price){
	const info = {make, model, year, newCar, usedCar, price}
	Object.assign(info, carInfo.carInfo, carPrice.carPrice);

	return info;
}

let info = InfoPrice('Honda', 'Type R', 2018, true, false, 35000);

console.log(info.toString());

info.price(true, false, 35000);
info.type('Honda', 'Type R', 2018);


