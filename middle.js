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

//Test code
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle(["1", "2", "3"]),["2"]); // => ["2"]
assertArraysEqual(middle([1, 2, 3,4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([]),[]); // => []
assertArraysEqual(middle([1,2]),[]); // => []