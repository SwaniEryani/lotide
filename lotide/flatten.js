
const flatten = function (input) {
  let result = []
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (let j = 0; j < input[i].length; j++) {
        result.push(input[i][j]);
      }
    } else {
      result.push(input[i]);
    }
  }
  return result;
}

module.exports = flatten;