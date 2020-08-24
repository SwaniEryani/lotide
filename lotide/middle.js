

const middle = function(array) {
  
  let midIndex;
  let returnVal = [];

  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midIndex = Math.floor(array.length / 2);
      returnVal.push(array[midIndex - 1]);
      returnVal.push(array[midIndex]);
      return returnVal;
    } else {
      midIndex = Math.floor(array.length / 2);
      returnVal.push(array[midIndex]);
      return returnVal;
    }
  } else {
    return returnVal;
  }
  
};




module.exports = middle;