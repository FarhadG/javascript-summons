var expect, scrambleWord;

scrambleWord = require('../src/15_scrambleWord', expect = require('../vendor/expect'));

describe("Scramble Word", function() {
  it("handles a simple word", function() {
    return expect(scrambleWord("cat", ["tac"])).to.eql(["tac"]);
  });
  it("does not return a word", function() {
    return expect(scrambleWord("cat", ["tom"])).to.eql([]);
  });
  it("handles a simple word from a larger array", function() {
    return expect(scrambleWord("cat", ["tic", "toc", "tac", "toe"])).to.eql(["tac"]);
  });
  it("only handles words of the correct length", function() {
    return expect(scrambleWord("cat", ["scatter", "tac", "ca"])).to.eql(["tac"]);
  });
  return it("handles multiple successful cases", function() {
    return expect(scrambleWord("turn", ["numb", "turn", "runt", "nurt"])).to.eql(["turn", "runt", "nurt"]);
  });
});
