require('../src/20_runTime');
var expect = require('../vendor/expect');

describe("Run Time", function() {
  it("calculates the time taken to run a function", function() {
    var test = function() { for(var i = 0; i < 999999999; i++) {} };
    expect(runTime(test)).to.be.above(700);
  })
})