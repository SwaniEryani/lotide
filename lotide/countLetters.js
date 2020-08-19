const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("\x1b[31m%s\x1b[0m",`✖️ ✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log("\x1b[32m%s\x1b[0m",`✔️ ✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(input) {
  let result = {};
  const noSpaces = input.split(" ").join("");
  for (const char of noSpaces) {
    // console.log(char);
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

//tests
console.log(countLetters('LHL'));//{ L: 2, H: 1}
console.log(countLetters("lighthouse in the house")); //{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1}

//assertion test
const result = countLetters("Hello World");
assertEqual(result["o"], 2);
