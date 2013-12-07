require("../src/transpose");
var expect = require("../vendor/expect");

describe("Transpose", function() {
  it("convert between row-oriented and column-oriented representations", function() {
    expect(transpose([[0, 1, 2], [3, 4, 5], [6, 7, 8]])).to.eql([[0, 3, 6], [1, 4, 7], [2, 5, 8]]);
  })

  it("convert between asymmetrical representations", function() {
    expect(transpose([[0, 1, 2, 3], [4, 5], [6, 7, 8, 9]])).to.eql([[0, 4, 6], [1, 5, 7], [2, undefined, 8], [3, undefined, 9]]);
  })
})