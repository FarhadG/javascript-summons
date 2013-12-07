require("../src/maxSubsum");
var expect = require("../vendor/expect");

def max_subsum(arr)
  min_idx, max_idx = 0, 0
  max_sum = 0
  i = 0
  while i < arr.length
    j = i
    while j < arr.length
      current_sum = arr[i..j].inject(:+)
      if current_sum > max_sum
        max_sum = current_sum
        min_idx, max_idx = i, j
      end
      j += 1
    end
    i += 1
  end
    
  return [min_idx, max_idx]
end
