const express = require("express");
// const bodyParser = require("body-parser");
// jwt 라이브러리
const jwt = require("jsonwebtoken");
// env환경변수 라이브러리
const dotenv = require("dotenv");
// 토큰검증 미들웨어
const { auth } = require("./authMiddleware.js");

const app = express();
// 환경변수 사용선언
dotenv.config();
// app.use(bodyParser.json());
app.use(express.json());

// body-parser 미들웨어 등록
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// 사용자 정보(하드코딩)
const users = [
  { id: "user1", pw: "111", nickname: "John" },
  { id: "user2", pw: "222", nickname: "Jane" },
  { id: "user3", pw: "333", nickname: "Bob" },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/memo", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

// post login요청이 들어오면 body에 id와 pwd를 실어서 요청으로 jwt를 발급
app.post("/login", (req, res) => {
  console.log(req.body);
  const key = process.env.SECRET_KEY;
  // 받은 요청에서 db의 데이터를 가져온다. (로그인 정보)
  let id = req.body.userid;
  let pw = req.body.userpw;
  let token = "";
  // 사용자 인증(하드코딩한 사용자와 비교)
  const user = users.find((u) => u.id === id && u.pw === pw);
  if (user) {
    token = jwt.sign(
      {
        type: "JWT",
        id: id,
        pw: pw,
      },
      key,
      {
        expiresIn: "15m", // 15분후 만료
        issuer: "토큰발급자",
      }
    );
    return res.status(200).json({
      code: 200,
      message: "token is created",
      token: token,
    });
  } else {
    res.status(401).json({ message: "등록된 회원이 아닙니다." });
  }
});

app.listen(3003);
