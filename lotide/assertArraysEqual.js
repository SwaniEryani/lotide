const eqArrays = require('../eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};
module.exports = assertArraysEqual;

