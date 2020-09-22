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

var car3 = {
	name: "smart",
	ph: "100ph",
	start: function() {
		console.log("engine is starting");
	},
	stop: function() {
		console.log("engine is stopped");
	},
};

var cars = [car, car2, car3];
//#work3 자동차 배열을 순회하여 이름이 smart인 자동차를 찾으면 "find"라고 출력하고 마력(ph) 출력
for(var i = 0; i < cars.length; i++){
	if(cars[i].name === "smart"){
		console.log("find");
		console.log(cars[i].ph);
	}
}

//es6
cars.map((car) => {
	if(car.name == "smart"){
		console.log("find");
		console.log(car.ph);
	}
})
