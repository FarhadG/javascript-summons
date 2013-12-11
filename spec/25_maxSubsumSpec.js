var expect, maxSubsum;

maxSubsum = require('../src/25_maxSubsum');

expect = require('../vendor/expect');

describe("Max Subsum", function() {
  it("returns the subarray with the largest sum", function() {
    return expect(maxSubsum([−2, 1, −3, 4, −1, 2, 1, −5, 4])).to.eql([4, −1, 2, 1]);
  });
  it("returns the subarray with the largest sum", function() {
    return expect(maxSubsum([1, -3, 5, -2, 9, -8, -6, 4])).to.eql([5, -2, 9]);
  });
  return it("returns the subarray with the largest sum", function() {
    return expect(maxSubsum([4, -2, -8, 5, -2, 7, 7, 2, -6, 5])).to.eql([5, -2, 7, 7, 2]);
  });
});
