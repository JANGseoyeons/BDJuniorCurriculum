const models = require("./models");
const fs = require("fs").promises;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

// 클릭 이벤트
const loginBtn = document.querySelector(".login");
console.log(loginBtn);

(async () => {
  try {
    const users = await models.User.findAll({
      attributes: ["user_id"],
      raw: true, // 옵션 추가
    });
    const userIds = users.map((user) => user.user_id);
    console.log(userIds);
  } catch (err) {
    console.error("Error:", err);
  }
})();

app.listen(3001, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 8000");
});
