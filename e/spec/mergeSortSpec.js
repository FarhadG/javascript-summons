require("../src/mergeSort");
var expect = require("../vendor/expect");

describe("Merge Sort", function() {
  it("sort the array using 'Merge Sort'", function() {
    expect(mergeSort([2, 8, 7, 4, 9, 1, 3])).to.eql([1, 2, 3, 4, 7, 8, 9]);
  })
});