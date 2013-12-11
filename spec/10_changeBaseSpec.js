var changeBase, expect;

changeBase = require('../src/10_changeBase');

expect = require('../vendor/expect');

describe("Change Base", function() {
  it("changes numbers from base 10 to another", function() {
    expect(changeBase(10, 10, 2)).to.eql(1010);
    expect(changeBase(10, 10, 3)).to.eql(101);
    expect(changeBase(10, 10, 4)).to.eql(22);
    expect(changeBase(10, 10, 5)).to.eql(20);
    return expect(changeBase(10, 10, 16)).to.eql("a");
  });
  it("changes numbers from base 2 to another", function() {
    expect(changeBase(101, 2, 10)).to.eql(5);
    expect(changeBase(10011, 2, 8)).to.eql(23);
    return expect(changeBase(2, 2, 16)).to.eql("4b");
  });
  return it("changes numbers from any base to another", function() {
    expect(changeBase(1231, 4, 10)).to.eql(109);
    expect(changeBase(1231, 4, 2)).to.eql(1101101);
    expect(changeBase(1231, 8, 2)).to.eql(1010011001);
    expect(changeBase(1231, 8, 16)).to.eql(299);
    return expect(changeBase(1245, 8, 16)).to.eql("2a5");
  });
});
