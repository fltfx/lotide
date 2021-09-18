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

let assertArraysEqual = function(array1, array2) {   //OLD CODE: const assertEqual = function(actual, expected) {

  if (eqArrays(array1,array2)) {    // OLD CODE: if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

//defining a function "map" as a variable/obj called "results1"
//where the parameters of this self-defined "map" function are one array "words" and a callback function
const results1 = map(words, word => word[0]);
console.log(results1);

// //TEST CODE/
// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(map(words, word => word.concat("Elephant")), ["groundElephant", "controlElephant", "toElephant", "majorElephant", "tomElephant"]);
// assertArraysEqual(map(words, word => 27), [27, 27, 27, 27, 27]);
