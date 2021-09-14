//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let head = function(array) {
  let firstEle = array[0];
  if (array === []) {
    return undefined;
  }
  return firstEle;
};

/*
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
*/