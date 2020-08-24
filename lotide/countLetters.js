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


module.exports = countLetters;