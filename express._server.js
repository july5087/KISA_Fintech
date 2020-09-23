const express = require("express");
const app = express();

app.set("views", __dirname + "/views"); //ejs를 사용하기 위한 디렉토리 설정
app.set("view engine", "ejs"); //ejs를 사용하기 위한 뷰 엔진 설정

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/ejsTest", function (req, res) {
  res.render("test");
});

app.listen(3000);
