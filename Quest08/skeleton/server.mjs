import http from "http";
import url from "url";
import querystring from "querystring";
import { runInNewContext } from "vm";

const server = http.createServer((req, res) => {
  /* TODO: 각각의 URL들을 어떻게 처리하면 좋을까요? */
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  const command = {
    bar: "seoyeon",
  };
  if (req.method === "POST" && req.url === "/foo") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      res.end(`Hellod, ${data.bar}`);
    });
  } else if (req.method === "GET" && parsedUrl.pathname === "/foo") {
    res.end(`Hello, ${query.bar}`);
  } else if (req.method === "POST" && req.url === "/pic/upload") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        // 업로드된 그림 파일을 저장할 적절한 위치를 찾습니다.
        // 예:
        const filePath = "/path/to/uploaded/picture.jpg";
        fs.writeFile(filePath, body, (err) => {
          if (err) {
            // 오류가 발생했을 때 처리합니다.
            console.error(err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
          }
          res.statusCode = 200;
          res.end("File uploaded");
        });
      });
  } else if (req.url === "/pic/upload" && req.method === "POST") {
    const pic = fs.createWriteStream(path.join(uploadDir, "pic.jpg"));
    req.pipe(pic);
    res.end("Uploaded!");
  } else if (req.url === "/pic/show") {
    fs.createReadStream(path.join(uploadDir, "pic.jpg")).pipe(res);
  } else if (req.url === "/pic/download") {
    res.setHeader("Content-Disposition", "attachment; filename=pic.jpg");
    fs.createReadStream(path.join(uploadDir, "pic.jpg")).pipe(res);
  } else {
    res.end("404 Not Found");
  }
});

server.listen(8080);
server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기중입니다.");
});
