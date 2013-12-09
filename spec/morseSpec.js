require("../src/morse");
var expect = require("../vendor/expect");

describe("Morse", function() {
  it("should do a simple letter", function() {
    expect(morse("q")).to.equal("--.-");
  })

  it("should handle a small word", function() {
    expect(morse("cat")).to.equal("-.-. .- -");
  })

  it("considers that two zeros are required, if zero is the target value", function() {
    expect(morse("cat in hat")).to.equal("-.-. .- -  .. -.  .... .- -");
  })
})