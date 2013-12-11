var expect, substrings;

substrings = require('../src/24_substrings');

expect = require('../vendor/expect');

describe("Substrings", function() {
  it("returns the substrings of a single character", function() {
    return expect(substrings("a")).to.eql(["a"]);
  });
  it("returns the substrings of a double digit character", function() {
    return expect(substrings("of")).to.eql(["o", "of", "f"]);
  });
  return it("returns the substrings of a double digit character", function() {
    return expect(substrings("cat")).to.eql(["c", "ca", "cat", "a", "at", "t"]);
  });
});
