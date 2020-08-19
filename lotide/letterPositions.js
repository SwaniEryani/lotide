const eqArrays = function(arr1, arr2) {
  let returnVal = true;
  if (arr1 && arr2) {
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
  }
  return false;
};
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};
const letterPositions = function(sentence) {
  const result = {};
  let index = 0;
  for (const char of sentence) {
    if (char !== ' ') {
      if (result[char]) {
        result[char].push(index);
      } else {
        result[char] = [index];
      }
    }
    index ++;
  }
  return result;
};

//test
/*
console.log(letterPositions('LHL'));
console.log(letterPositions('Hello World'));
console.log(letterPositions("lighthouse in the house"));
*/
// assertion tests
const test = letterPositions("lighthouse in the house");
assertArraysEqual(test["h"],[3, 5, 15, 18]);
assertArraysEqual(letterPositions("hello").e, [1]);
