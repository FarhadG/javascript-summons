require("../src/fyShuffle");
var expect = require("../vendor/expect");

describe("Fisher–Yates Shuffle", function() {
  it("shuffles the array using the Fisher–Yates methodology", function() {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    expect(fyShuffle(arr)).to.not.eql(arr);
  })
})