const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(array) {
  if ((array.length === 1) || (array === [])) {
    return [];
  }
  let lastEles = array.slice(1);
  return lastEles;
};
/*
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//test 2
let myArray = [1,2,3,4];
console.log(tail(myArray));

//test 3
console.log(tail([1]));
//test 4
console.log(tail([]));*/