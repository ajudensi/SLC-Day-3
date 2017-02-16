'use strict';

Array.prototype.toTwenty = function () {
  const arr = [];
  for (let i = 1; i <= 20; i += 1) {
    arr.push(i);
  }
  return arr;
};

Array.prototype.toForty = function () {
  const arr = [];
  for (let i = 2; i <= 40; i += 2) {
    arr.push(i);
  }
  return arr;
};

Array.prototype.toOneThousand = function () {
  const arr = [];
  for (let i = 10; i <= 1000; i += 10) {
    arr.push(i);
  }
  return arr;
};

Array.prototype.search = function (arg) {
  const arr = this;
  const obj = {
    count: 0,
    index: -1,
    length: arr.length,
  };

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === arg) {
      obj.index = index;
      break;
    }
  }

  function binarySearch(minimum, maximum) {
    if (minimum > maximum) {
      return obj;
    }

    if (arr[minimum] === arg) {
      return obj;
    }

    if (arr[maximum] === arg) {
      return obj;
    }

    const middleIndex = Math.floor((minimum + maximum) / 2);
    const middleElement = arr[middleIndex];

    if (middleElement === arg) {
      return obj;
    }

    obj.count += 1;

    if (middleElement > arg) {
      return binarySearch(minimum + 1, middleIndex);
    } else if (middleElement < arg) {
      return binarySearch(middleIndex, maximum - 1);
    }
    return obj;
  }
  return binarySearch(0, arr.length - 1);
};

exports.toTwenty = Array.prototype.toTwenty;
exports.toForty = Array.prototype.toForty;
exports.toOneThousand = Array.prototype.toOneThousand;
