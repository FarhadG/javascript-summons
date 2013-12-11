var caesar, expect;

caesar = require('../src/06_caesar');

expect = require('../vendor/expect');

describe("Caesar Cipher", function() {
  it("encodes lowercase strings", function() {
    return expect(caesar("hello", 3)).to.equal("khoor");
  });
  it("encodes uppercase strings", function() {
    return expect(caesar("SUMMON", 3)).to.equal("VXPPRQ");
  });
  return it("encodes more complex sentences", function() {
    return expect(caesar("SUMMON my epic Javascript!", 3)).to.equal("VXPPRQ pb hslf Mdydvfulsw!");
  });
});
