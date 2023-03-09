import http from "http";
import url from "url";
import fs from "fs";
import path from "path";
import formidable from "formidable";
const __dirname = path.resolve();

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
  } else if (req.url === "/pic") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/index.html", (err, data) => {
      // 파일 읽는 메소드
      res.end(data, "utf-8"); // 브라우저로 전송
    });
  } else if (req.url === "/pic/upload" && req.method.toLowerCase() === "post") {
    // 파일 업로드 요청 처리
    const form = formidable({ multiples: false });
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Error");
        return;
      }
      const oldPath = files.pic.path;
      const newPath = path.join(__dirname, "uploads", files.pic.name);
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end("Error");
          return;
        }
        res.statusCode = 302;
        res.setHeader("Location", "/pic/show");
        res.end();
      });
    });
  } else if (req.url === "/pic/show" && req.method.toLowerCase() === "get") {
    // 파일 보기 요청 처리
    const filePath = path.join(__dirname, "uploads", "pic.jpg");
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else if (
    req.url === "/pic/download" &&
    req.method.toLowerCase() === "get"
  ) {
    // 파일 다운로드 요청 처리
    const filePath = path.join(__dirname, "uploads", "pic.jpg");
    res.setHeader("Content-Disposition", 'attachment; filename="pic.jpg"');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  }
});

server.listen(8080);
server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기중입니다.");
});
