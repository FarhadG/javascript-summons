var expect, mergeSort;

mergeSort = require('../src/18_mergeSort');

expect = require('../vendor/expect');

describe("Merge Sort", function() {
  it("returns an empty array if there are no elements to sort", function() {
    return expect(mergeSort([])).to.eql([]);
  });
  return it("sorts the array using Merge Sort'", function() {
    return expect(mergeSort([2, 8, 7, 5, 4, 9, 10, 3])).to.eql([2, 3, 4, 5, 7, 8, 9, 10]);
  });
});
