var expect, sumPairs;

sumPairs = require('../src/07_sumPairs', expect = require('../vendor/expect'));

describe("Sum Pairs", function() {
  it("returns an empty array", function() {
    return expect(sumPairs([0, 1, 3, 5, 7, 10], 9)).to.be.empty();
  });
  it("returns an array with the passing pairs", function() {
    return expect(sumPairs([7, 8, 3, 9, 1, -6, -8, 4], 11)).to.eql([[7, 4], [8, 3]]);
  });
  return it("considers that two zeros are required, if zero is the target value", function() {
    expect(sumPairs([6, -6, 8, -8, 9, -10, 0, 1], 0)).to.eql([[6, -6], [8, -8]]);
    return expect(sumPairs([6, -6, 8, -8, 9, -10, 0, 0, 1], 0)).to.eql([[6, -6], [8, -8], [0, 0]]);
  });
});
