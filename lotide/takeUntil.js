
const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (const e of array) {
    if (!callback(e)) {
      result.push(e);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;