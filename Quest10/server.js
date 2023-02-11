const express = require("express");

const app = express();

app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(3000);
