const express = require("express");
const app = express();

app.set("views", __dirname + "/views"); //ejs를 사용하기 위한 디렉토리 설정
app.set("view engine", "ejs"); //ejs를 사용하기 위한 뷰 엔진 설정

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/hello", function (req, res) {
  res.send("Hello 2");
});

//#work6 다양한 라우터를 추가하기
app.get("/user", function (req, res) {
  res.send("user Data");
});

app.listen(3000);
