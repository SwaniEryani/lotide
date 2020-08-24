const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
