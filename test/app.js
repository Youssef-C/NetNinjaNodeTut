var expect    = require("chai").expect;

const request = require('request');

describe("My API", function() {
    var url = "http://localhost:3000/api/random";
 describe("", function() {
    it("checks to see if response has property number", function(done) {
        request(url, function(error, response, body) {
        // expect({a: 1}).to.have.property('b');
        // https://www.chaijs.com/api/bdd/#method_property
        expect(JSON.parse(body)).to.have.property('number')
        done()
      //expect(ranNum).to.be.below(1023)
        });
    });
});
 
describe("/api/random", function() {
  it("returns status 200", function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
});