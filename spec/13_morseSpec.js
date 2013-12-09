require("../src/13_morse");
var expect = require("../vendor/expect");

describe("Morse", function() {
  it("converts a simple letter", function() {
    expect(morse("q")).to.equal("--.-");
  })

  it("converts a small word", function() {
    expect(morse("cat")).to.equal("-.-. .- -");
  })

  it("converts a sentence", function() {
    expect(morse("cat in hat")).to.equal("-.-. .- -  .. -.  .... .- -");
  })
})