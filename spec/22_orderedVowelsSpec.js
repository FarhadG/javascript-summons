require("../src/22_orderedVowels");
var expect = require("../vendor/expect");

describe("Ordered Vowels", function() {
  it("returns a word that is in order", function() {
    expect(orderedVowels("amends")).to.equal("amends");
  })

  it("does not return a word that is not in order", function() {
    expect(orderedVowels("complicated")).to.equal("");
  })

  it("handle double vowels", function() {
    expect(orderedVowels("afoot")).to.equal("afoot");
  })

  it("handles a word with a single vowel", function() {
    expect(orderedVowels("ham")).to.equal("ham");
  })

  it("handles a word with no vowel", function() {
    expect(orderedVowels("crypt")).to.equal("crypt");
  })

  it("handles a word with a single letter", function() {
    expect(orderedVowels("o")).to.equal("o");
  })

  it("ignores the letter y", function() {
    expect(orderedVowels("tamely")).to.equal("tamely");
  })

  it("processes a string with several words", function() {
    var phrase = "this is a test of the vowel ordering system";
    var result = "this is a test of the system";
    expect(orderedVowels(phrase)).to.equal(result);
  })
})