var express = require("express");
var router = express.Router();
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const userT = require("../models/user")(sequelize, DataTypes);
const fileT = require("../models/filedata")(sequelize, DataTypes);
const bcrypt = require("bcrypt");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/getTest", async (req, res) => {
  // 클라이언트에게 응답을
  try {
    res.send({
      msg: "This my response : get",
    });
  } catch (err) {
    console.log(err);
    res.send({
      error: 'Can"t read api data',
    });
  }
});

router.post("/api/postTest", async (req, res) => {
  const user = await userT.findOne({
    where: { name: req.body.username },
  });
  if (user.dataValues.id) {
    res.send("true");
  } else {
    res.send("false");
  }

  // if (!user) {
  //   console.log("User not found.");
  // } else {
  //   // req.session.user = { id: req.body.username };
  //   const passwordMatch = await bcrypt.compare(req.body.pwd, user.pwd);
  //   if (passwordMatch && user.name === req.body.id) {
  //     res.send("true");
  //   } else {
  //     res.send("false");
  //   }
  // }
});

module.exports = router;
