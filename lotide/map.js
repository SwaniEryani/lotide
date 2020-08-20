const eqArrays = function(arr1, arr2) {
  let returnVal = true;
  if(arr1 && arr2){
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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

//asseration tests
assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[0]+ "ay"),[ 'gay', 'cay', 'tay', 'may', 'tay' ]);
assertArraysEqual(map(words, word => word ),["ground", "control", "to", "major", "tom"]);

