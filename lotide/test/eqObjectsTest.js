const assert = require('chai').assert;
const _   = require('../index');

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  it(`returns false for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }`, () => {
    assert.deepEqual(_.eqObjects(ab, abc), false);
  });
  it(`returns '5' for { a: "1", b: "2" } and { b: "2", a: "1" } `, () => {
    assert.deepEqual(_.eqObjects(ab, ba), true); 
  });
  
});