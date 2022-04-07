const logger = function(){
	console.log('My this ', this);
	console.log(this.message);
}

const error = {
	status: 404,
	message: 'Not Found'
}


logger.call(error);
