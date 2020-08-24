const eqArrays = function(arr1, arr2) {
  let returnVal = true;
  if(arr1 && arr2){
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          returnVal = true;
        } else {
          returnVal = false;
          break;
        }
      }
    } else {
      return false;
    }
    return returnVal;
  }
return false;
};



module.exports = eqArrays;