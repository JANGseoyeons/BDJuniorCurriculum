const express = require("express");
const nunjucks = require("nunjucks");
const { userList } = require("./model/user.js");
const bodyParser = require("body-parser");

const app = express();

const session = {};

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/user/login", (req, res) => {
  const msg = req.query.msg;
  res.render("./user/login", { msg });
});

// app.post("/user/login", (req, res) => {
//   const { userid, userpw } = req.body;

//   const [user] = userList.filter((v) => v.id === userid && v.pw === userpw);
//   if (user) {
//     const privateKey = Math.floor(Math.random() * 1000000000);
//     session[privateKey] = user;
//     console.log(session);
//     res.sendFile(__dirname + "/skeleton/index.html");
//   } else {
//     res.redirect("/user/login?msg=등록되지 않은 사용자 입니다");
//   }
// });
app.post("/user/login", (req, res) => {
  const { userid, userpw } = req.body;

  const [user] = userList.filter((v) => v.id === userid && v.pw === userpw);
  if (user) {
    const privateKey = Math.floor(Math.random() * 1000000000);
    session[privateKey] = user;
    console.log(session);
    res.setHeader("Set-Cookie", `connect.id=${privateKey}; path=/`);
    res.sendFile(__dirname + "/skeleton/index.html");
  } else {
    res.redirect("/user/login?msg=등록되지 않은 사용자 입니다");
  }
});

app.listen(3000);
