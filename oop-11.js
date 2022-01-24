function interviewQuestion(job){
	if(job === 'designer'){
		var desc = ' can you please explain what UX design is?'
	}
	if(job === 'teacher'){
		var desc = ' what subject do you teach?';
	}
	if(!job){
		var desc = ' what do you do?';
	}

	return function(name){
		console.log(name + desc);
	}
}

var question1 = interviewQuestion('designer');
var question2 = interviewQuestion('teacher');
var question3 = interviewQuestion();

question1('Tom');
question2('Carl');
question3();
