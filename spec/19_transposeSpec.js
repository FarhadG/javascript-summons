var expect, transpose;

transpose = require('../src/19_transpose');

expect = require('../vendor/expect');

describe("Transpose", function() {
  it("converts between row-oriented and column-oriented representations", function() {
    var input, result;
    input = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    result = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    return expect(transpose(input)).to.eql(result);
  });
  return it("converts between asymmetrical representations", function() {
    var input, result;
    input = [[0, 1, 2, 3], [4, 5], [6, 7, 8, 9]];
    result = [[0, 4, 6], [1, 5, 7], [2, void 0, 8], [3, void 0, 9]];
    return expect(transpose(input)).to.eql(result);
  });
});
