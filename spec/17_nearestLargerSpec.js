require("../src/nearestLarger");
var expect = require("../vendor/expect");

describe("Nearest Larger", function() {
  it("return the nearest larger integer's index to the left", function() {
    expect(nearestLarger([2, 8, 7, 4, 9], 2)).to.eql(1);
  })

  it("returns the nearest larger integer's index to the right", function() {
    expect(nearestLarger([2, 4, 7, 8, 9], 2)).to.eql(3);
  })

  it("returns the left result if it's a tie", function() {
    expect(nearestLarger([1, 8, 7, 4, 7], 3)).to.eql(2);
  })

  it("iterates through the array to find the result", function() {
    expect(nearestLarger([4, 7, 8, 5, 9], 2)).to.eql(4);
  })

  it("returns null if no results were found", function() {
    expect(nearestLarger([1, 3, 2, 4, 2], 3)).to.eql(null);
  })
})