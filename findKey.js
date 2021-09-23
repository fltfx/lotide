// for (let key in obj) {
//   if (val === obj[key]) {
//     return key;
//   }
// }

const findKey = function(object, callback) {
  for (let item in object) {
    //console.log(callback(object[item]));
    if (callback(object[item]) === true) {
      return item;
    }
  }
  return undefined;
};

//Test 1
let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


const assertEqual = require("./assertEqual");
assertEqual(results1, "noma");

//Test 2
let results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5) // => "noma"

assertEqual(results2, undefined);

module.exports =  findKey;


