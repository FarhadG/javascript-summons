var expect, orderedVowels;

orderedVowels = require('../src/22_orderedVowels', expect = require('../vendor/expect'));

describe("Ordered Vowels", function() {
  it("returns a word that is in order", function() {
    return expect(orderedVowels("amends")).to.equal("amends");
  });
  it("does not return a word that is not in order", function() {
    return expect(orderedVowels("complicated")).to.equal("");
  });
  it("handle double vowels", function() {
    return expect(orderedVowels("afoot")).to.equal("afoot");
  });
  it("handles a word with a single vowel", function() {
    return expect(orderedVowels("ham")).to.equal("ham");
  });
  it("handles a word with no vowel", function() {
    return expect(orderedVowels("crypt")).to.equal("crypt");
  });
  it("handles a word with a single letter", function() {
    return expect(orderedVowels("o")).to.equal("o");
  });
  it("ignores the letter y", function() {
    return expect(orderedVowels("tamely")).to.equal("tamely");
  });
  return it("processes a string with several words", function() {
    var phrase, result;
    phrase = "this is a test of the vowel ordering system";
    result = "this is a test of the system";
    return expect(orderedVowels(phrase)).to.equal(result);
  });
});
