// Sequelize 모듈 로드
const Sequelize = require("sequelize");

// Sequelize 인스턴스 생성
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql", // 사용할 데이터베이스 종류
});

// User 모델 정의
const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// 데이터베이스에 테이블 생성
sequelize
  .sync()
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((err) => {
    console.error("Unable to create User table:", err);
  });
