var value = 500;
var obj = {
	value: 0,
	increment: function(){
		this.value++;

		var innerFunction = function(){
			console.log(this.value);
		}
		innerFunction();
	}
}


var obj2 = {
	value: 0,
	increment: () => {
		this.value++;

		var innerFunction = () => {
			console.log(this.value);
		}
		innerFunction();
	}
}

obj2.increment();
