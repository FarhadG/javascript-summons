require("../src/changeBase");
var expect = require("../vendor/expect");

describe("Change Base", function() {
  it("change numbers from base 10 to 2", function() {
    expect(changeBase(10, 10, 2)).to.eql(1010);
    expect(changeBase(6, 10, 2)).to.eql(110);
    expect(changeBase(8, 10, 2)).to.eql(1000);
  })

  it("change numbers from base 2 to 10", function() {
    expect(changeBase(10, 2, 10)).to.eql(2);
    expect(changeBase(67, 2, 10)).to.eql(110);
    expect(changeBase(8, 2, 10)).to.eql(1000);
  })

  it("change numbers from base 10 to 2", function() {
    expect(changeBase()).to.eql();
    expect(changeBase()).to.eql();
    expect(changeBase()).to.eql();
    expect(changeBase()).to.eql();
  })
});