var fs = require("fs");

//비동기함수에서 순서대로 처리 위해 callback 함수 사용
function callReadFile(callback){
	fs.readFile("./example/test.txt", "utf8", function(err, result){
		if(err){
			console.error(err);
			throw err;
		}
		else{
			callback(result);
		}
	});
}

console.log("first func");
console.error("두번째 기능인데 파일을 읽어오느라 시간이.. 조금.. 걸려요");
callReadFile(function (data) {
	console.log(data);
	console.log("thirs func");
});
