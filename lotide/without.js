const eqArrays = function(arr1, arr2) {
  let returnVal = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        returnVal = true;
      } else {
        returnVal = false;
        break;
      }
    }
  } else {
    return false;
  }
  return returnVal;
};
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};
const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      result.push(source[i]);
    }
  }
  return result;
};
///tests

const numbersChar = ["1", "2", "3"];
without(numbersChar, ["3"]);
assertArraysEqual(numbersChar, ["1", "2", "3"]);

const numbers = [1, 1, 5];
without(numbers, [1]);
assertArraysEqual(numbers, [1, 1, 5]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);