const _ = require('../index');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2,3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(_.tail(['5']), []); 
  });
  it("returns undefined for []", () => {
    assert.deepEqual(_.tail([]), []); 
  });
});