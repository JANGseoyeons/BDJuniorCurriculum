const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const ejs = require("ejs");

const app = express();
const port = process.env.PORT || 3000;

// 데이터베이스 역할을 하는 users 배열
const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    password: "123", // password is "password"
  },
  {
    id: 2,
    name: "jsy",
    email: "jsy@example.com",
    password: "123", // password is "password"
  },
  {
    id: 3,
    name: "dong",
    email: "dong@example.com",
    password: "123", // password is "password"
  },
];

// 사용자 인증 함수
function authenticate(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return users[i];
    }
  }
  return null;
}

// EJS를 렌더링할 때 사용할 설정
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// 세션 설정
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //   httpOnly: true,
    //   secure: true,
    // },
  })
);

// POST 요청의 body를 파싱하는 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));

// 로그인 페이지
app.get("/login", function (req, res) {
  res.render("login");
});

// 로그인 처리
app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = authenticate(email, password);

  if (user) {
    req.session.user = user;
    res.redirect("/notes");
  } else {
    res.render("login", { error: "Invalid email or password." });
  }
});

// 로그아웃 처리
app.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/login");
});

// 메모장 페이지
app.get("/notes", (req, res) => {
  const user = req.session.user;
  // 사용자 정보가 없으면 로그인 화면으로 이동합니다.
  if (!user) {
    return res.redirect("/login");
  }
  // 사용자마다 별도의 메모 배열을 사용하기 위해
  // 세션에서 사용자 정보를 확인합니다.
  const notes = req.session.notes || [];
  res.render("notes", { user, notes });
});

app.post("/notes", (req, res) => {
  const user = req.session.user;
  // 사용자 정보가 없으면 로그인 화면으로 이동합니다.
  if (!user) {
    return res.redirect("/login");
  }
  const note = req.body.note;
  // 사용자마다 별도의 메모 배열을 사용하기 위해
  // 세션에서 사용자 정보를 확인합니다.
  req.session.notes = req.session.notes || [];
  // 메모를 배열에 추가합니다.
  req.session.notes.push(note);
  res.redirect("/notes");
});

// 메모 삭제 처리
app.post("/notes/delete", function (req, res) {
  const user = req.session.user;

  if (user) {
    const noteIndex = parseInt(req.body.noteIndex);
    user.notes.splice(noteIndex, 1);
    res.redirect("/notes");
  } else {
    res.redirect("/login");
  }
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
