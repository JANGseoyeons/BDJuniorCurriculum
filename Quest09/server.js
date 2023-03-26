const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const { runInNewContext } = require("vm");
const fs = require("fs").promises;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "my-secret-key", // 세션 데이터를 암호화하기 위한 키
    resave: true,
    saveUninitialized: true,
  })
);

// body-parser 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: false }));

// 경로로 이동시 login 화면 출력
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/save", (req, res) => {
  console.log(req.body.fileNm, req.body.content);
  res.send(req.body);
  // 로컬파일시스템
  fs.writeFile(`./data/${req.body.fileNm}.txt`, req.body.content)
    .then(() => {})
    .catch((err) => {
      throw err;
    });
});

app.post("/delect", (req, res) => {
  fs.unlink(`./data/${req.body.fileNm}.txt`, (err) => {
    if (err) throw err;
    console.log("File is deleted.");
  });
});

app.listen(3002);
