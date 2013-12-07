require("../src/unique");
var expect = require("../vendor/expect");

describe("Unique", function() {
  it("return an array with the unique elements", function() {
    expect(unique([0, 1, 1, 1, 2, 2, 3, 5, 6, 6, 10])).to.eql([0, 1, 2, 3, 5, 6, 10]);
  });

    it("return the unique elements in the same order as before", function() {
    expect(unique([4, 4, 2, 7, 2, 5])).to.eql([4, 2, 7, 5]);
  });
});