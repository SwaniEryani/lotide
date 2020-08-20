const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    //console.log(" ✖️ ✖️ ✖️ ✖️  Assertion Failed: " + actual + " !== " + expected);
    console.log("\x1b[31m%s\x1b[0m", `✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    //console.log(" ✔️ ✔️ ✔️ ✔️  Assertion Passed: " + actual + " === " + expected);
    console.log("\x1b[32m%s\x1b[0m", `✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result;
  for (const obj in object) {
    if (callback(object[obj])) {
      result = obj;
      break;
    }
  }
  return result;
};


const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3);

const result3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 1);

assertEqual(result, "noma");
assertEqual(result2, "Akaleri");
assertEqual(result3, "Blue Hill");