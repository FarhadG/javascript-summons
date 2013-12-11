var expect, insertionSort;

insertionSort = require('../src/14_insertionSort');

expect = require('../vendor/expect');

describe("Insertion Sort", function() {
  it("returns an empty array if there are no elements to sort", function() {
    return expect(insertionSort([])).to.eql([]);
  });
  return it("sorts the array using Insertion Sort'", function() {
    return expect(insertionSort([2, 8, 7, 5, 4, 9, 10, 3])).to.eql([2, 3, 4, 5, 7, 8, 9, 10]);
  });
});
