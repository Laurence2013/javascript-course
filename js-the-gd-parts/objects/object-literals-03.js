var empty_object = {};

var stooge = {
	'first-name': 'Jerome',
	'last-name': 'Howard'
}
var flight = {
	airline: 'Oceanic',
	number: 815,
	departure:{
		IATA: 'SYD',
		time: '2004-09-22 14:55',
		city: 'Sydney'
	},
	arrivale: {
		IATA: 'LAX',
		time: '2004-09-23 10:42',
		city: 'Los Angeles'
	}
}

/*if(typeof Object.create !== 'function'){
	Object.create = function(o){
		var F = function(){};
		F.prototype = o;

		return new F();
	}
}*/

var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'Actor';

console.log(another_stooge.profession);

console.log(another_stooge);
