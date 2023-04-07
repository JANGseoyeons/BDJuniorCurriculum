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

// 사용자 정보(하드코딩)
const users = [
  { id: "user1", pw: "111", nickname: "John" },
  { id: "user2", pw: "222", nickname: "Jane" },
  { id: "user3", pw: "333", nickname: "Bob" },
];

app.get("/api/load", (req, res) => {
  // res.send("ok");
  res.send(req.session);
});

// 경로로 이동시 login 화면 출력
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", (req, res) => {
  // 클라이언트에서 받은 id,pw 데이터
  const id = req.body.userid;
  const pw = req.body.userpw;
  // 사용자 인증(하드코딩한 사용자를 비교)
  const user = users.find((u) => u.id === id && u.pw === pw);
  // 입력한 정보가 일치하면 세션에 사용자 정보를 저장한다.
  if (user) {
    // 세션에 사용자 정보 저장
    req.session.user = user;
    // res.status(200).json({ message: "Login successful", user: user });
    res.sendFile(__dirname + "/test.html");
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
  let data = req.session;
  console.log(data);
  const targetKey = "file-" + data.user.id;
  const result = targetKey.substring(targetKey.indexOf("-") + 1);
  // console.log(req.session[targetKey].fileList);
  console.log(data["file-" + result]);
});

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
  console.log("user", req.session.user);
  const fileName = req.body.fileNm;
  const fileContent = req.body.content;

  let sessionStatus = {
    now: "",
    fileList: [],
  };

  const newFile = {
    fileName1: fileName,
    data: fileContent,
  };

  sessionStatus.fileList.push(newFile);
  res.send(sessionStatus);

  // 세션에 입력한 정보 저장
  let file = "file-" + req.session.user.id;
  req.session[file] = sessionStatus;
  req.session.save();
});

app.post("/delect", (req, res) => {
  fs.unlink(`./data/${req.body.fileNm}.txt`, (err) => {
    if (err) throw err;
    console.log("File is deleted.");
  });
});

app.post("/active", (req, res) => {
  // req.session.file.now = req.body.now;
  req.session.save();
});

app.listen(3002);
