const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

const { ERR_INVALID_NUMBER, ERR_MAX_NUMBER_LENGTH } = require("../config");

chai.use(chaiHttp);

describe("Generate PhoneWords API tests", () => {
  describe("Test status codes", () => {
    it("Test status code with valid parameter", (done) => {
      chai
        .request(server)
        .get("/api/v1/phonewords/32")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("Test status code with not valid parameter (0 digit)", (done) => {
      chai
        .request(server)
        .get("/api/v1/phonewords/321")
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe("Test error messages", () => {
    it("Test error message for too log parameter", (done) => {
      chai
        .request(server)
        .get("/api/v1/phonewords/2223334445")
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property("valid").to.equal(false);
          res.body.should.have
            .property("error")
            .to.equal(ERR_MAX_NUMBER_LENGTH);
          done();
        });
    });
    it("Test error message for not valid number.", (done) => {
      chai
        .request(server)
        .get("/api/v1/phonewords/321")
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property("valid").to.equal(false);
          res.body.should.have.property("error").to.equal(ERR_INVALID_NUMBER);
          done();
        });
    });
  });

  describe("Test valid results", () => {
    it("Test a valid list of words for number 23", (done) => {
      chai
        .request(server)
        .get("/api/v1/phonewords/23")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("valid").to.equal(true);
          res.body.should.have
            .property("phoneWords")
            .to.eql(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
          done();
        });
    });
  });
});
