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

const flatten = function (input) {
  let result = []
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (let j = 0; j < input[i].length; j++) {
        result.push(input[i][j]);
      }
    } else {
      result.push(input[i]);
    }
  }
  return result;
}
assertArraysEqual(flatten([[1, 2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);