const assertEqual = require('./assertEqual');


let eqArrays = function(array1, array2) {
  //first, check that the size of the array is the same
  if (array1.length !== array2.length) {
    console.log("Both arrays are different lengths. Please input two arrays of the same lenth.");
    return false;
  }
  //Loop through the arrays to check element by element
  for (let i = 0; i < array1.length; i++) {
    //console.log("comparing elements:", array1[i], array2[i]);
    if (array1[i] !== array2[i]) {
      //if the two elements at the same index do not match, return false
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

