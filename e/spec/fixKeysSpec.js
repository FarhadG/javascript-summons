require("../src/fixKeys");
var expect = require("../vendor/expect");

describe("Fix Keys", function() {
  it("fixes the keys to correctly identify with their value", function() {
    var broken = {a:"banana", b:"cabbage", c:"dental_floss", d: "eel_sushi"};
    var fixed  = {b:"banana", c:"cabbage", d:"dental_floss", e: "eel_sushi"};
    expect(fixKey(broken))to.eql(fixed);
  })
});