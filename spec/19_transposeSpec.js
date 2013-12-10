require("../src/19_transpose");
var expect = require("../vendor/expect");

describe("Transpose", function() {
  it("converts between row-oriented and column-oriented representations", function() {
    var input  = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    var result = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    expect(transpose(input)).to.eql(result);
  })

  it("converts between asymmetrical representations", function() {
    var input  = [[0, 1, 2, 3],
                  [4, 5], 
                  [6, 7, 8, 9]];
                  
    var result = [[0, 4, 6], 
                  [1, 5, 7], 
                  [2, undefined, 8], 
                  [3, undefined, 9]];
    expect(transpose(input)).to.eql(result);
  })
})