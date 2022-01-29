let F = function(){
	this.a = 1;
	this.b = 2;
}

let o = new F();

F.prototype.b = 3;
F.prototype.c = 4;

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);
