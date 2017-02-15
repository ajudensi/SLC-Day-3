'use strict';

module.exports = {
  findMissing(firstArray, secondArray) {
    let result = 0;
    let maxArray;
    let minArray;
    if (firstArray.length > secondArray.length) {
      maxArray = firstArray;
      minArray = secondArray;
    } else if (firstArray.length < secondArray.length) {
      maxArray = secondArray;
      minArray = firstArray;
    } else {
      return result;
    }

    for (let index = 0; index < maxArray.length; index += 1) {
      if (minArray.indexOf(maxArray[index]) === -1) {
        result = maxArray[index];
        break;
      }
    }

    return result;
  },
};
