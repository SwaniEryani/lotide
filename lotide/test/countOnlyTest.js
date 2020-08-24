const assert = require('chai').assert;
const countOnly = require('../countOnly');

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
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })
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
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
