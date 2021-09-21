const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual')

//TEST CODE/
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]); 
assertArraysEqual([1, 2, 3], [1, 2, 42]); 
assertArraysEqual([1, 27, 3], [1, 2, 42]); 
assertArraysEqual([], [1, 2, 42]); 