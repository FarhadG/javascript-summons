require("../src/factors");
var expect = require("../vendor/expect");

describe("Factors", function() {
  it("returns an array of the input's factors", function() {
    expect(factors(20)).to.eql([1, 2, 4, 5, 10, 20]);
  })

  it("returns null for negative integers", function() {
    expect(factors(-7)).to.be.null;
  })
})