const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs").promises;

const app = express();

// 사용자 정보
const users = [
  { id: "user1", pw: "111", nickname: "John" },
  { id: "user2", pw: "222", nickname: "Jane" },
  { id: "user3", pw: "333", nickname: "Bob" },
];
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

// 경로로 이동시 login 화면 출력
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

// body-parser 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user/login", (req, res) => {
  // 클라이언트에서 받은 id,pw 데이터
  const id = req.body.userid;
  const pw = req.body.userpw;

  // 사용자 인증
  const user = users.find((u) => u.id === id && u.pw === pw);
  if (!user) {
    return res.status(401).send("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
  // 세션에 사용자 정보 저장
  req.session.user = user;

  res.sendFile(__dirname + "/test.html");
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
  console.log(req.body.fileNm, req.body.content);
  const fileName = req.body.fileNm;
  const fileContent = req.body.content;

  const newFile = {
    fileName: fileName,
    data: fileContent,
  };
  sessionStatus.fileList.push(newFile);
  res.send(sessionStatus);

  console.log(sessionStatus);
  // 로컬파일시스템
  fs.writeFile(`./data/${req.body.fileNm}.txt`, req.body.content)
    .then(() => {})
    .catch((err) => {
      throw err;
    });
});

app.post("/delect", (req, res) => {
  console.log(req.body.fileNm);
  fs.unlink(`./data/${req.body.fileNm}.txt`, (err) => {
    if (err) throw err;
    console.log("File is deleted.");
  });
});

app.post("/active", (req, res) => {
  console.log("ee", req.body.now);
  sessionStatus.now = req.body.now;
  console.log("dd", sessionStatus);
});

app.listen(3000);
