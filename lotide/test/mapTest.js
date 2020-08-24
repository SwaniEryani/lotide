
const assert = require('chai').assert;
const _ = require('../index');
const words = ["ground", "control", "to", "major", "tom"];
describe("#Map", () => {
  it("should returns [ 'g', 'c', 't', 'm', 't' ] for map(words, word => word[0])", () => {
    assert.deepEqual(_.map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
  });
  it("should returns [ 'gay', 'cay', 'tay', 'may', 'tay' ] for map(words, word => word[0]+ \"ay\")", () => {
    assert.deepEqual(_.map(words, word => word[0]+ "ay"),[ 'gay', 'cay', 'tay', 'may', 'tay' ]);
  });
  it(`should returns ["ground", "control", "to", "major", "tom"] for map(map(words, word => word)`, () => {
    assert.deepEqual(_.map(words, word => word),["ground", "control", "to", "major", "tom"]);
  });
  
});


