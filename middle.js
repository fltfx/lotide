const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

let middle = function(array) {
  let middleArray = [];
  let middleIndex;
  if (array.length <= 2) { //if array has 1-2 elements or is empty
    return [];
  } else if (array.length % 2 === 0) {
    middleIndex = (array.length / 2) - 1;
    middleArray = array.slice(middleIndex,middleIndex + 2);
  } else if (array.length % 2 !== 0) {
    middleIndex = (array.length - 1) / 2;
    middleArray = array.slice(middleIndex,middleIndex + 1);
  }
  return middleArray;
};

module.exports = middle;


