require("../src/unique");
var expect = require("../vendor/expect");

describe("Unique", function() {
  it("returns a new array with the unique elements", function() {
    expect(unique([0, 1, 1, 1, 2, 2, 3, 5, 6, 6, 10])).to.eql([0, 1, 2, 3, 5, 6, 10]);
  })

  it("returns a sorted array of the unique elements", function() {
    expect(unique([4, 4, 2, 7, 2, 5])).to.eql([2, 4, 5, 7]);
  })
});