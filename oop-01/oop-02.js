function Vehicle(make, model, engine){
	this.make = make;
	this.model = model;
	this.engine = engine;

	return {make, model, engine}
}

const overview = {
	miles(miles){ return miles },
	bodyType(bodyType){ return bodyType },
	engineSize(engineSize){ return engineSize },
	gearType(gears){ return gears },
	fuelType(fuel){ return fuel },
	doors(doors){ return doors },
	seats(seats){ return seats }
}

function Overview(overview, vehicle){
	return {...overview, ...vehicle};
}

const overview00 = Overview(overview, Vehicle('Toyota', 'Celica', '1.8'));

console.log(overview00.miles(95000));

