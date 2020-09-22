var http = require("http");
const request = require("request");
var parseString = require("xml2js").parseString;

http
  .createServer(function (req, res) {
	var body = "<html><h1>test</h1></html>";
	console.log("요청이 들어왔습니다.");
	request("https://naver.com", function (error, response, body) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(body);
    });
  })

  .listen(3000);

  // http://localhost:3000 연결
