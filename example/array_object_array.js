var car = {
	name: "sonata",
	ph: "500ph",
	start: function() {
		console.log("engine is starting");
	},
	stop: function() {
		console.log("engine is stopped");
	},
};

var car2 = {
	name: "bmw",
	ph: "380ph",
	start: function() {
		console.log("engine is starting");
	},
	stop: function() {
		console.log("engine is stopped");
	},
};

var cars = [car, car2];
console.log(cars);

//#work2 두번째 요소의 이름을 출력하기
console.log(cars[1].name);
