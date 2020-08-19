const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    //console.log(" ✖️ ✖️ ✖️ ✖️  Assertion Failed: " + actual + " !== " + expected);
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    //console.log(" ✔️ ✔️ ✔️ ✔️  Assertion Passed: " + actual + " === " + expected);
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};

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


const eqObjects = function(object1, object2) {
  let returnVal;
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);
  if (keysObj1.length === keysObj2.length) {
    for (const obj in object1) {
      if (Array.isArray(object2[obj]) && Array.isArray(object1[obj])) {
        return eqArrays(object2[obj], object1[obj]);
      } else if (object2[obj] === object1[obj]) {
        returnVal = true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return returnVal;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

//assertion test
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);