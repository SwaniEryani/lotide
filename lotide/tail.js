const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    //console.log(" ✖️ ✖️ ✖️ ✖️  Assertion Failed: " + actual + " !== " + expected);
    console.log(`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    //console.log(" ✔️ ✔️ ✔️ ✔️  Assertion Passed: " + actual + " === " + expected);
    console.log(`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
  
};

const tail = function(inArr) {
  let returnVal = [];
  for (let i = 1; i < inArr.length; i++) {
    returnVal.push(inArr[i]);
  }
  return returnVal;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result.length, ["Lighthouse", "Labs"].length);
