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

// 파일 저장
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
  console.log("sss", req.body);
  fileT.destroy({
    where: { filename: req.body.fileNm },
  });
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
app.post("/checkuser", async (req, res) => {
  console.log("로그인", req.body.id);

  const user = await userT.findOne({
    where: { name: req.body.id },
  });

  if (!user) {
    console.log("User not found.");
  } else {
    req.session.user = { id: req.body.id };
    const passwordMatch = await bcrypt.compare(req.body.pwd, user.pwd);
    if (passwordMatch && user.name === req.body.id) {
      res.send("true");
    } else {
      res.send("false");
    }
  }
});

app.listen(3001);
