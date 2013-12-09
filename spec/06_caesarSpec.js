require("../src/06_caesar");
var expect = require("../vendor/expect");

describe("Caesar Cipher", function() {
  it("encodes lowercase strings", function() {
    expect(caesar("hello", 3)).to.equal("khoor");
  })

  it("encodes uppercase strings", function() {
    expect(caesar("SUMMON", 3)).to.equal("VXPPRQ");
  })

  it("encodes more complex sentences", function() {
    expect(caesar("SUMMON my epic Javascript!", 3)).to.equal("VXPPRQ pb hslf Mdydvfulsw!");
  })
})