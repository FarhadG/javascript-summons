var expect, recIntersection;

recIntersection = require('../src/23_recIntersection', expect = require('../vendor/expect'));

describe("Rectangle Intersection", function() {
  it("handles a simple case", function() {
    return expect(recIntersection([[0, 0], [2, 1]], [[1, 0], [3, 1]])).to.eql([[1, 0], [2, 1]]);
  });
  it("returns the smaller rectangle if engulfed completely", function() {
    return expect(recIntersection([[1, 1], [2, 2]], [[0, 0], [5, 5]])).to.eql([[1, 1], [2, 2]]);
  });
  it("returns null if there is no intersection", function() {
    return expect(recIntersection([[1, 1], [2, 2]], [[4, 4], [5, 5]])).to.be["null"];
  });
  return it("handles a more complex case", function() {
    return expect(recIntersection([[1, 1], [5, 4]], [[2, 2], [3, 5]])).to.eql([[2, 2], [3, 4]]);
  });
});
