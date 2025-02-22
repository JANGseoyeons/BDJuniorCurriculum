const fs = require("fs");

const https = require("https");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const options = {
  key: fs.readFileSync("./config/cert.key"),
  cert: fs.readFileSync("./config/cert.crt"),
};

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/save", (req, res) => {
  console.log(req.body.fileNm, req.body.content);
  res.send(req.body);
  // 로컬파일시스템
  fs.writeFile(`../data/${req.body.fileNm}.txt`, req.body.content)
    .then(() => {})
    .catch((err) => {
      throw err;
    });
});
app.post("/delect", (req, res) => {
  console.log(req.body.fileNm);
  // res.send(req.body);
  // 로컬파일시스템
  fs.unlink(`../data/${req.body.fileNm}.txt`, (err) => {
    if (err) throw err;
    console.log("File is deleted.");
  });
});

app.listen(8000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 8000");
});

https.createServer(options, app).listen(8080, () => {
  console.log(`HTTPS server started on port 8080`);
});
