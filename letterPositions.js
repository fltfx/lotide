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

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let currentLetter = sentence.charAt(i);
    if (currentLetter !== " ") {
      if (results[currentLetter]) {
        results[currentLetter].push(i);
      } else {
        results[currentLetter] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);


console.log(letterPositions("lighthouse in the house"));
