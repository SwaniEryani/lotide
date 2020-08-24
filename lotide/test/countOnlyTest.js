const assert = require('chai').assert;
const _ = require('../index');

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })
  it("should returns 1 for [\"Jason\"]", () => {
    assert.deepEqual(result1["Jason"], 1);
  });
  it("should returns undefined for [\"Karima\"]", () => {
    assert.deepEqual(result1["Karima"], undefined); 
  });
  it("returns 2 for [\"Fang\"]", () => {
    assert.deepEqual(result1["Fang"], 2); 
  });
});
