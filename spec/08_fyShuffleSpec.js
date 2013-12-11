var expect, fyShuffle;

fyShuffle = require('../src/08_fyShuffle');

expect = require('../vendor/expect');

describe("Fisher–Yates Shuffle", function() {
  return it("shuffles the array using the Fisher–Yates methodology", function() {
    var arr;
    arr = [1, 2, 3, 4, 5, 6, 7];
    return expect(fyShuffle(arr)).to.not.eql(arr);
  });
});
