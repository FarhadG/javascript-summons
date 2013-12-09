require("../src/bubbleSort");
var expect = require("../vendor/expect");

describe("Bubble Sort", function() {
  it("returns an empty array if there are no elements to sort", function() {
    expect(bubbleSort([])).to.eql([]);
  })

  it("sorts the array using Bubble Sort'", function() {
    expect(bubbleSort([2, 8, 7, 5, 4, 9, 10, 3])).to.eql([2, 3, 4, 5, 7, 8, 9, 10]);
  })
})