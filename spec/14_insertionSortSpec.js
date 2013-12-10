require('../src/14_insertionSort');
var expect = require('../vendor/expect');

describe("Insertion Sort", function() {
  it("returns an empty array if there are no elements to sort", function() {
    expect(insertionSort([])).to.eql([]);
  })

  it("sorts the array using Insertion Sort'", function() {
    expect(insertionSort([2, 8, 7, 5, 4, 9, 10, 3])).to.eql([2, 3, 4, 5, 7, 8, 9, 10]);
  })
})