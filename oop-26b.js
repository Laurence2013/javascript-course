function createP(ancestor){
	const p = {...ancestor, bar(){ console.log('this is bar') }}

	return p;
}

const o = {
	foo(){ console.log('this is foo') },
	foa(){ console.log('this is foa') },	
};
const p = createP(o);

p.foo();
p.foa();
p.bar();

