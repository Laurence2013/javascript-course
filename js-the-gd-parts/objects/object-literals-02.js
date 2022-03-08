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

var a = {}, b = {}, c = {}; 

aa = bb = cc = {};

var x = stooge;
x.nickname = 'Curly';

var nick = stooge.nickname;

console.log(nick);
