
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
module.exports = findKey;

