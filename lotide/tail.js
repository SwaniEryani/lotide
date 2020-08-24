const tail = function(inArr) {
  let returnVal = [];
  for (let i = 1; i < inArr.length; i++) {
    returnVal.push(inArr[i]);
  }
  return returnVal;
};


module.exports = tail;