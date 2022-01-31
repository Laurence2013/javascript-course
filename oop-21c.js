const carInfo = require('./oop-21a.js');
const carPrice = require('./oop-21a.js');
const keySpecs = require('./oop-21a.js');
const carOverview = require('./oop-21a.js');

function InfoPrice(){
	const info = {}
	Object.assign(carInfo.carInfo, carPrice.carPrice);

	return info;
}

let infoPrice = InfoPrice();

console.log(infoPrice.toString());
