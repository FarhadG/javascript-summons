var expect, morse;

morse = require('../src/13_morse', expect = require('../vendor/expect'));

describe("Morse", function() {
  it("converts a simple letter", function() {
    return expect(morse("q")).to.equal("--.-");
  });
  it("converts a small word", function() {
    return expect(morse("cat")).to.equal("-.-. .- -");
  });
  return it("converts a sentence", function() {
    return expect(morse("cat in hat")).to.equal("-.-. .- -  .. -.  .... .- -");
  });
});
