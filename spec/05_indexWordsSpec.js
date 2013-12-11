var expect, indexWords;

indexWords = require('../src/05_indexWords', expect = require('../vendor/expect'));

describe("Index Words", function() {
  it("returns an object mapping out the words to their first letter", function() {
    var result, words;
    words = ["apple", "car"];
    result = {
      a: ["apple"],
      c: ["car"]
    };
    return expect(indexWords(words)).to.eql(result);
  });
  it("handles letters that have multiple values", function() {
    var result, words;
    words = ["car", "cat"];
    result = {
      c: ["car", "cat"]
    };
    return expect(indexWords(words)).to.eql(result);
  });
  return it("sorts the words in alphabetical order", function() {
    var result, words;
    words = ["banana", "cat", "car", "bat", "carrot", "yellow"];
    result = {
      b: ["banana", "bat"],
      c: ["car", "carrot", "cat"],
      y: ["yellow"]
    };
    return expect(indexWords(words)).to.eql(result);
  });
});
