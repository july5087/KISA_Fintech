function multi(p1, p2){
	return p1 * p2;
}
function dev(p1, p2){
	return p1 / p2;
}
function plus(p1, p2){
	return p1 + p2;
}
function sub(p1, p2){
	return p1 - p2;
}
console.log(multi(5, 3));
console.log(div(5, 3));
console.log(plus(5, 3));
console.log(sub(5, 3));

//es6 문법
const multiply = (p1, p2) => {
	return p1 * p2;
}
