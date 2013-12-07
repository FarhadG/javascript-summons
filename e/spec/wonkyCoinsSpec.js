require("../src/wonkyCoins");
var expect = require("../vendor/expect");

describe "#wonky_coins" do
  it "handles a simple case" do
    wonky_coins(1).should == 3
  end

  it "handles a larger case" do
    wonky_coins(5).should == 11
    # 11
    # => [2, 1, 1]
    # => [[1, 0, 0], [0, 0, 0], [0, 0, 0]]
    # => [[[0, 0, 0], 0, 0], [0, 0, 0], [0, 0, 0]]
  end

  it "handles being given the zero coin" do
    wonky_coins(0).should == 1
  end

end