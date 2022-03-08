function test(num){
	for(let i = 0; i < num; i ++){
		(function(ii){
			let mul = ii * ii;
			console.log(mul);
		})(i)
	}
};

function test2(num){
	for(let i = 0; i < num; i++){
		((ii) => {
			let mul = ii * ii;
			console.log(mul);
		})(i)
	}
}

test2(10);
