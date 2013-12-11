var expect, factors;

factors = require('../src/01_factors');

expect = require('../vendor/expect');

describe("Factors", function() {
  it("returns an array of the input's factors", function() {
    return expect(factors(20)).to.eql([1, 2, 4, 5, 10, 20]);
  });
  return it("returns null for negative integers", function() {
    return expect(factors(-7)).to.be["null"];
  });
});
