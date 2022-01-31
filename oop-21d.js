const carInfo = {
	type(){
		console.log(this, `Make of car: ${this.make}, Model of car ${this.model}, Year of car manufactured ${this.year}`);
	},
	toString(){
		return this.make;
	}
}
const carPrice = {
	currentPrice(newCar, usedCar){
		if(newCar){
			console.log(this, `For new cars, Price is £${this.price}`);
		}
		if(usedCar){
			console.log(this, `For used cars, Price is £${this.price}`);
		}
	}
}
const keySpecs = {
	specs(bodyType, mpg, seats, driveType){
		console.log(`Car type is ${bodyType}, this car mpg is ${mpg} and car type is: ${driveType}`);
	},
	dimensions(length, width){
		console.log(`Car Length: ${length} and Car Width: ${width}`);
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
