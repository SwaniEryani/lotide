
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
// const test = letterPositions("lighthouse in the house");
// assertArraysEqual(test["h"],[3, 5, 15, 18]);
// assertArraysEqual(letterPositions("hello").e, [1]);
module.exports = letterPositions;
