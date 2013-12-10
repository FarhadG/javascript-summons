require('../src/05_indexWords');
var expect = require('../vendor/expect');

describe("Index Words", function() {
  it("returns an object mapping out the words to their first letter", function() {
    var words  = ["apple", "car"];
    var result = {a: ["apple"], c: ["car"]};
    expect(indexWords(words)).to.eql(result);
  })

  it("handles letters that have multiple values", function() {
    var words  = ["car", "cat"];
    var result = {c: ["car", "cat"]};
    expect(indexWords(words)).to.eql(result);
  })

  it("sorts the words in alphabetical order", function() {
    var words  = ["banana", "cat", "car", "bat", "carrot", "yellow"];
    var result = {b: ["banana", "bat"], c: ["car", "carrot", "cat"], y: ["yellow"]};
    expect(indexWords(words)).to.eql(result);
  })
})