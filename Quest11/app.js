const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const { sequelize } = require("./models");
const { DataTypes } = require("sequelize");
const fs = require("fs").promises;
const userT = require("./models/user")(sequelize, DataTypes);
const fileT = require("./models/filedata")(sequelize, DataTypes);
const bcrypt = require("bcrypt");

const app = express();
// sequelize.sync();

// 세션 상태
let sessionStatus = {
  now: "",
  fileList: [],
};

/** express-session은 클라이언트의 브라우저에 쿠키를 발행하고, 
 그 쿠키를 통해 세션 데이터를 저장하는 방식으로 동작합니다.
 이를 통해 사용자의 로그인 상태 등을 유지할 수 있습니다.**/
// 세션 미들웨어 등록
app.use(
  session({
    secret: "my-secret-key", // 세션 데이터를 암호화하기 위한 키
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

// 회원가입 화면
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/insertUser.html");
});
// 로그인 화면
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
// 메모장 화면
app.get("/memo", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

// body-parser 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/user/login", (req, res) => {
//   // 클라이언트에서 받은 id,pw 데이터
//   const id = req.body.userid;
//   const pw = req.body.userpw;

//   // 사용자 인증
//   const user = users.find((u) => u.id === id && u.pw === pw);
//   if (!user) {
//     return res.status(401).send("아이디 또는 비밀번호가 일치하지 않습니다.");
//   }
//   // 세션에 사용자 정보 저장
//   req.session.user = user;
//   console.log("ee", req.session);

//   res.sendFile(__dirname + "/test.html");
// });

app.post("/click", (req, res) => {
  const filename = req.body.filename; // 클라이언트가 보낸 파일 이름
  const filePath = path.join(__dirname, filename); // 로컬 파일 시스템에서 파일 경로 가져오기
  fs.readFile(filePath, (err, data) => {
    // 파일의 내용을 읽기
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.set("Content-Type", "text/plain"); // 응답 헤더 설정
    res.send(data); // 파일의 내용을 응답으로 보내기
  });
});

app.post("/save", (req, res) => {
  const fileName = req.body.fileNm;
  const fileContent = req.body.content;

  console.log("ss", req.session.user.id);

  // filedata 테이블에 작성한 텍스트, 로그인한 아이디 저장
  fileT
    .create({
      userid: req.session.user.id,
      filename: fileName,
      filecontent: fileContent,
    })
    .then((user) => {
      if (user) {
        // console.log(user.toJSON());
        res.send("true");
      } else {
        // console.log("User not found");
        res.send("false");
      }
    })
    .catch((error) => console.error(error));
});

app.post("/delect", (req, res) => {
  fs.unlink(`./data/${req.body.fileNm}.txt`, (err) => {
    if (err) throw err;
    console.log("File is deleted.");
  });
});

app.post("/active", (req, res) => {
  sessionStatus.now = req.body.now;
});

// 회원가입 요청
app.post("/signup", async (req, res) => {
  try {
    // 요청 데이터 id, pwd 추출
    const { id, pwd } = req.body;

    // bcrypt를 사용하여 비밀번호를 해싱
    const hashedPassword = await bcrypt.hash(pwd, 10);
    // saltRounds: 10
    const user = await userT.create({ name: id, pwd: hashedPassword });
    // 회원가입 성공 응답
    res.status(201).json({ message: "회원가입 성공", user });
  } catch (error) {
    // 회원가입 실패 응답
    console.error(error);
    res.status(500).json({ message: "회원가입 실패" });
  }
});

// 로그인 요청
app.post("/checkuser", (req, res) => {
  console.log("로그인", req.body.id);

  userT
    .findOne({
      where: {
        name: req.body.id,
        pwd: req.body.pwd,
      },
    })
    .then((user) => {
      if (user) {
        // console.log(user.toJSON());
        req.session.user = { id: req.body.id };
        res.send("true");
      } else {
        // console.log("User not found");
        res.send("false");
      }
    })
    .catch((error) => console.error(error));
});

app.listen(3000);
