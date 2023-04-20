var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const testRouter = require("./routes/test");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// front 서버인 192.168.0.5:8080의 요청을 허용하도록 cors 사용
app.use(
  cors({
    origin: "http://192.168.0.5:8080",
    Credential: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/test", testRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.post("/memo", function (req, res) {
  // front 서버에서 post 방식으로 전송받음
  console.log("입력받은 텍스트는 : " + req.body.content); // Request Body의 number값 출력
  return res.status(200).json({
    // front 서버에 json 형태로 '잘 받음' message 리턴
    message: "잘 받음",
  });
});

app.listen(52273, function () {
  console.log("Server Running at http://192.168.0.5:52273");
});
module.exports = app;
