var expect, runTime;

runTime = require('../src/20_runTime', expect = require('../vendor/expect'));

describe("Run Time", function() {
  return it("calculates the time taken to run a function", function() {
    var test;
    test = function() {
      var num, _i, _results;
      _results = [];
      for (num = _i = 0; _i <= 999999999; num = ++_i) {
        _results.push(num);
      }
      return _results;
    };
    return expect(runTime(test)).to.be.above(700);
  });
});
