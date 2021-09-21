const eqArrays = require('./eqArrays')

let assertArraysEqual = function(array1, array2) {   //OLD CODE: const assertEqual = function(actual, expected) {

  if (eqArrays(array1,array2)) {    // OLD CODE: if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;



