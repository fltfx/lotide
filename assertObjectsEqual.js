// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

let eqArrays = function(array1, array2) {
  //first, check that the size of the array is the same
  if (array1.length !== array2.length) {
    console.log("Both arrays are different lengths. Please input two arrays of the same length.");
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //check that both objects have the same # of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  let keys1 = Object.keys(object1); //keys1 is an array of the keys in object1
  for (let key1 of keys1) {
    //check if both current values are arrays
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      let boolEqArrays = eqArrays(object1[key1], object2[key1]);
      return boolEqArrays;
    } else if (object1[key1] === object2[key1]) { //elif compare using primitive comparison
      //do nothing
    } else {
      return false;
    }
  }
  return true;
};

let assertObjectsEqual = function(actual, expected) {   //OLD CODE: const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual,expected)) {    // OLD CODE: if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    //console.log(`Example label: ${inspect(actual)}`);

  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//when there are array values in the object
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;
