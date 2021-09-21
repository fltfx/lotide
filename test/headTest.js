const assertEqual = require('../assertEqual');
const head = require('../head')

// let head = function(array) {
//   let firstEle = array[0];
//   if (array === []) {
//     return undefined;
//   }
//   return firstEle;
// };


//Test code
//pass
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);

//fail
assertEqual(head([5,6,7]), 10);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Bananda");
assertEqual(head([5]), 13);
assertEqual(head([]), true);
