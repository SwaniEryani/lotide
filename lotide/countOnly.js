const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    //console.log(" ✖️ ✖️ ✖️ ✖️  Assertion Failed: " + actual + " !== " + expected);
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    //console.log(" ✔️ ✔️ ✔️ ✔️  Assertion Passed: " + actual + " === " + expected);
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  

  return results;
};

//tests
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);