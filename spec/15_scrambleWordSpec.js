require("../src/15_scrambleWord");
var expect = require("../vendor/expect");

describe("Scramble Word", function() {
  it("handles a simple word", function() {
    expect(scrambleWord("cat", ["tac"])).to.eql(["tac"]);
  })

  it("does not return a word", function() {
    expect(scrambleWord("cat", ["tom"])).to.eql([]);
  })

  it("handles a simple word from a larger array", function() {
    expect(scrambleWord("cat", ["tic", "toc", "tac", "toe"])).to.eql(["tac"]);
  })

  it("only handles words of the correct length", function() {
    expect(scrambleWord("cat", ["scatter", "tac", "ca"])).to.eql(["tac"]);
  })

  it("handles multiple successful cases", function() {
    expect(scrambleWord("turn", ["numb", "turn", "runt", "nurt"])).to.eql(["turn", "runt", "nurt"]);
  })
});
