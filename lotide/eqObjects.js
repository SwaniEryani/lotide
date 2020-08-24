
const _= require('./index');

const eqObjects = function(object1, object2) {
  let returnVal;
  let keysObj1 = Object.keys(object1);
  let keysObj2 = Object.keys(object2);
  if (keysObj1.length === keysObj2.length) {
    for (const obj in object1) {
      if (Array.isArray(object2[obj]) && Array.isArray(object1[obj])) {
        return _.eqArrays(object2[obj], object1[obj]);
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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// //eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// //eqObjects(ab, abc); // => false

// //assertion test
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// //eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;