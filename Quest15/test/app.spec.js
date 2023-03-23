const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { expect } = require("chai");
const chaiHttp = require("chai-http");

describe("App", () => {
  before(async () => {
    await sequelize.sync({ force: true }); // reset the database before running tests
  });

  describe("GET /", () => {
    it("should respond with status code 200", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe("POST /signup", () => {
    it("should respond with status code 201 and a success message", (done) => {
      const user = { id: "jsy", pwd: "111" };
      request(app)
        .post("/signup")
        .send(user)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.message).to.equal("회원가입 성공");
          expect(res.body.user.name).to.equal(user.id);
          done();
        });
    });
  });

  describe("Test the /checkuser path", () => {
    test('It should respond to the POST method with "true" if user exists and password matches', async () => {
      const response = await request(app).post("/checkuser").send({
        id: "testuser",
        pwd: "testpassword",
      });
      expect(response.text).toBe("true");
    });

    test('It should respond to the POST method with "false" if user does not exist', async () => {
      const response = await request(app).post("/checkuser").send({
        id: "nonexistentuser",
        pwd: "testpassword",
      });
      expect(response.text).toBe("false");
    });

    test('It should respond to the POST method with "false" if password does not match', async () => {
      const response = await request(app).post("/checkuser").send({
        id: "testuser",
        pwd: "wrongpassword",
      });
      expect(response.text).toBe("false");
    });
  });
});
