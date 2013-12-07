require("../src/nonRepeats");
var expect = require("../vendor/expect");

describe("No Repeats", function() {
  it("return the number(s) with unique digtis", function() {
    expect(nonRepeats(198, 199)).to.eql([198]);
  });

  it("return the number(s) with unique digtis", function() {
    expect(nonRepeats(1980, 1988)).to.eql([1980, 1982, 1983, 1984, 1985, 1986, 1987]);
  });

  it("return an empty array if the digits are not unique", function() {
    expect(nonRepeats(898)).to.eql([]);
  });
});