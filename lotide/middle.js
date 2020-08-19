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
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};

const middle = function(array) {
  
  let midIndex ;
  let returnVal = [];

  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midIndex = Math.floor(array.length / 2);
      returnVal.push(array[midIndex - 1]);
      returnVal.push(array[midIndex]);
      return returnVal;
    } else {
      midIndex = Math.floor(array.length / 2);
      returnVal.push(array[midIndex]);
      return returnVal;
    }
  } else {
    return returnVal;
  }
  
}


//test length < 2
assertArraysEqual(middle([1]), []);// => []
assertArraysEqual(middle([1, 2]), []); // => []

//test length odd
assertArraysEqual(middle([1, 2, 3]), [2]);// => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);// => [3]

// test length even
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);// => [3, 4]
