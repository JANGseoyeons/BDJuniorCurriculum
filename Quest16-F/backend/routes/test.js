var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/test", function (req, res, next) {
  res.send("test중 입니다.");
});

module.exports = router;
