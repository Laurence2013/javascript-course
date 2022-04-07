var test 	= 30;
var obj 	= { num: 3};

var addToThis = function(num00){
	return this.test + num00;
}

console.log(addToThis.call(this, 3));
