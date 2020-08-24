const assert = require('chai').assert;
const _ = require('../index');

describe("#countOnly", () => {

  it("should returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should returns false for [1, 2, 3] and [3, 2, 1]", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
  it(`should returns true for ["1", "2", "3"] and ["1", "2", "3"]`, () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  });
  it(`should returns false for ["1", "2", "3"], ["1", "2", 3]`, () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
  it(`should returns true for [] , []`, () => {
    assert.deepEqual(_.eqArrays( [] , []), true); 
  });
});

