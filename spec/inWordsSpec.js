require("../src/inWords");
var expect = require("../vendor/expect");

describe("In Words", function() {
  it("reads 0 to 9", function() {
    expect(inWords(0)).to.equal('zero');
    expect(inWords(1)).to.equal('one');
    expect(inWords(2)).to.equal('two');
    expect(inWords(3)).to.equal('three');
    expect(inWords(4)).to.equal('four');
    expect(inWords(5)).to.equal('five');
    expect(inWords(6)).to.equal('six');
    expect(inWords(7)).to.equal('seven');
    expect(inWords(8)).to.equal('eight');
    expect(inWords(9)).to.equal('nine');
  })

  it("reads 10 to 12", function() {
    expect(inWords(10)).to.equal('ten');
    expect(inWords(11)).to.equal('eleven');
    expect(inWords(12)).to.equal('twelve');
  })

  it("reads teens", function() {
    expect(inWords(13)).to.equal('thirteen');
    expect(inWords(14)).to.equal('fourteen');
    expect(inWords(15)).to.equal('fifteen');
    expect(inWords(16)).to.equal('sixteen');
    expect(inWords(17)).to.equal('seventeen');
    expect(inWords(18)).to.equal('eighteen');
    expect(inWords(19)).to.equal('nineteen');
  })

  it("reads tens", function() {
    expect(inWords(20)).to.equal('twenty');
    expect(inWords(30)).to.equal('thirty');
    expect(inWords(40)).to.equal('forty');
    expect(inWords(50)).to.equal('fifty');
    expect(inWords(60)).to.equal('sixty');
    expect(inWords(70)).to.equal('seventy');
    expect(inWords(80)).to.equal('eighty');
    expect(inWords(90)).to.equal('ninety');
  })

  it("reads various other numbers less than 100", function() {
    expect(inWords(20)).to.equal('twenty');
    expect(inWords(77)).to.equal('seventy seven');
    expect(inWords(99)).to.equal('ninety nine');
  })

  it("reads hundreds", function() {
    expect(inWords(100)).to.equal('one hundred');
    expect(inWords(200)).to.equal('two hundred');
    expect(inWords(300)).to.equal('three hundred');
    expect(inWords(123)).to.equal('one hundred twenty three');
    expect(inWords(777)).to.equal('seven hundred seventy seven');
    expect(inWords(818)).to.equal('eight hundred eighteen');
    expect(inWords(512)).to.equal('five hundred twelve');
    expect(inWords(999)).to.equal('nine hundred ninety nine');
  })

  it("reads thousands", function() {
    expect(inWords(1000)).to.equal('one thousand');
    expect(inWords(32767)).to.equal('thirty two thousand seven hundred sixty seven');
    expect(inWords(32768)).to.equal('thirty two thousand seven hundred sixty eight');
  })

  it("reads millions", function() {
    expect(inWords(10000001)).to.equal('ten million one');
  })

  it("reads billions", function() {
    expect(inWords(1234567890)).to.equal('one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety');
  })

  it("reads trillions", function() {
    expect(inWords(1000000000000)).to.equal('one trillion');
    expect(inWords(1000000000001)).to.equal('one trillion one');
    expect(inWords(1888259040036)).to.equal('one trillion eight hundred eighty eight billion two hundred fifty nine million forty thousand thirty six');
  })
});