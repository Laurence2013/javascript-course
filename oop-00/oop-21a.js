const carInfo = {
	type(make, model, year){
		console.log(this, `Make of car: ${make}, Model of car ${model}, Year of car manufactured ${year}`);
	},
	toString(){
		return this.make;
	}
}
const carPrice = {
	price(newCar = false, usedCar = false, price){
		if(newCar == true){
			console.log(this, `car is new and Price is £${price}`);
		}
		if(usedCar == true){
			console.log(this, `car is used and Price is £${price}`);
		}
	},
	/*toString(){
		return this.price;
	}*/
}
const keySpecs = {
	specs(bodyType, mpg, seats, driveType){
		console.log(`Car type is ${bodyType}, this car mpg is ${mpg} and car type is: ${driveType}`);
	},
	dimensions(){
		console.log(`Car Length: ${this.length} and Car Width: ${this.width}`);
	}
}
const carOverview = {
	good(goodOverview){
		console.log(`Car good overviews: ${goodOverview}`);
	},
	bad(badOverview){
		console.log(`car bad overviews: ${badOverview}`);
	}
}

module.exports = {
	carInfo, carPrice, keySpecs, carOverview
}
