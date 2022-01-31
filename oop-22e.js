const carInfo = require('./oop-21d.js');
const carPrice = require('./oop-21d.js');
const keySpecs = require('./oop-21d.js');
const carOverview = require('./oop-21d.js');

function Info(make, model, year, price){
	const info = {make, model, year, price};
	Object.assign(info, carInfo.carInfo, carPrice.carPrice);

	return info;
}
function InfoKeySpecs(make, model, year){
	const info = {make, model, year};
	Object.assign(info, carInfo.carInfo, keySpecs.keySpecs);

	return info;
}

let info = Info('Honda', 'Type R', 2018, 35000);
let key = InfoKeySpecs('Honda', 'Type R', 2018, 35000);

console.log(key.make);
key.specs('Hatchback', 65, 4, 'All Wheel Drive');
key.dimensions(1140, 1200);

/*info.type();
info.currentPrice(true, false);

console.log()
console.log(info.toString());*/
