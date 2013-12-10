require('../src/24_substrings');
var expect = require('../vendor/expect');

describe("Substrings", function() {
  it("returns the substrings of a single character", function() {
    expect(substrings("a")).to.eql(["a"]);
  })

  it("returns the substrings of a double digit character", function() {
    expect(substrings("of")).to.eql(["o", "of", "f"]);
  })

  it("returns the substrings of a double digit character", function() {
    expect(substrings("cat")).to.eql(["c", "ca", "cat", "a", "at", "t"]);
  })
})