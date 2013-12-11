var expect, reduce;

reduce = require('../src/02_reduce', expect = require('../vendor/expect'));

describe("Reduce", function() {
  it("returns the sum of the elements in an array", function() {
    return expect(reduce([4, 4, 2, 7, 2, 5])).to.eql(24);
  });
  return it("returns the sum of the elements plus the initial value", function() {
    return expect(reduce([2, 4, 2, 9, 2, 3], 10)).to.eql(32);
  });
});
