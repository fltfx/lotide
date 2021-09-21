const assertEqual = require('../assertEqual');
const tail = require('../tail')


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
console.log(tail([]));