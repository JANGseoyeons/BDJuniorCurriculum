const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

const server = http.createServer((req, res) => {
  /* TODO: 각각의 URL들을 어떻게 처리하면 좋을까요? */
  const parsedUrl = url.parse(req.url, true);
  if (req.url === "/") {
    res.end("Hello World!");
  } else if (parsedUrl.pathname === "/foo") {
    if (req.method === "GET") {
      const bar = parsedUrl.query.bar;
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Hello, ${bar}`);
    } else if (req.method === "POST") {
      let body = "";
      console.log(body);
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const data = JSON.parse(body);
        const bar = data.bar;
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello, ${bar}`);
      });
    }
    // 사진 form
  }
  if (req.url === "/pic") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/index.html", (err, data) => {
      // 파일 읽는 메소드
      res.end(data, "utf-8");
    });
  }
  if (req.url === "/pic/upload" && req.method === "POST") {
    console.log(req.body);
    res.end("dd");
  }
});

server.listen(8080);
server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기중입니다.");
});
