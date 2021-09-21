const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')

//TEST Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([1, 27, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 42]), false); // => should PASS
assertEqual(eqArrays([], [1, 2, 42]), false); // => should PASS
