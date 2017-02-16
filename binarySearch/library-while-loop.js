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

Array.prototype.search = function (n) {
  const arr = this;
  let firstIndex = 0;
  let lastIndex = this.length - 1;

  const obj = {
    count: 0,
    index: -1,
    length: arr.length,
  };

  while (firstIndex <= lastIndex) {
    const midIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (arr[midIndex] === n) {
      obj.index = midIndex;
      return obj;
    } else if (arr[firstIndex] === n) {
      obj.index = firstIndex;
      return obj;
    } else if (arr[lastIndex] === n) {
      obj.index = lastIndex;
      return obj;
    } else if (arr[midIndex] < n) {
      firstIndex = midIndex + 1;
      lastIndex -= 1;
    } else if (arr[midIndex] > n) {
      lastIndex = midIndex - 1;
      firstIndex += 1;
    }
    obj.count++;
  }
  return obj;
};

exports.toTwenty = Array.prototype.toTwenty;
exports.toForty = Array.prototype.toForty;
exports.toOneThousand = Array.prototype.toOneThousand;
