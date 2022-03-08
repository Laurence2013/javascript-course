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

var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'Actor';

console.log(another_stooge);

delete another_stooge.nickname;

console.log(another_stooge);


