const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    //console.log(" ✖️ ✖️ ✖️ ✖️  Assertion Failed: " + actual + " !== " + expected);
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    //console.log(" ✔️ ✔️ ✔️ ✔️  Assertion Passed: " + actual + " === " + expected);
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let returnVal;
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);
  if (keysObj1.length === keysObj2.length) {
    for (const obj in object1) {
      if (object2[obj] === object1[obj]) {
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

