require("../src/nearestLarger");
var expect = require("../vendor/expect");

describe("Nearest Larger", function() {
  it("return the nearest larger integer and its index", function() {
    expect(nearestLarger([2, 8, 7, 4, 9], 2)).to.eql([8, 1]);
  })

  it("return the left result if it's a tie", function() {
    expect(nearestLarger([1, 8, 7, 4, 7], 3)).to.eql([7, 2]);
  })

  it("iterate to find the result", function() {
    expect(nearestLarger([4, 7, 8, 5, 9], 2)).to.eql([9, 4]);
  })

  it("return null if no results were found", function() {
    expect(nearestLarger([1, 3, 2, 4, 2], 3)).to.eql(null);
  })
});