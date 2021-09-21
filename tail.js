// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

let tail = function(array) {
  if ((array.length === 1) || (array === [])) {
    return [];
  }
  let lastEles = array.slice(1);
  return lastEles;
};
module.exports = tail;