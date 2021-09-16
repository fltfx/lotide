const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(sentence) {
  let count = {};
  //str.replace(/\s/g, "X");

  for (let letter of sentence) {
    if (letter !== " ") {
      if (count[letter]) {
      count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
}


//assertEqual(countLetters("LHL"), { L: 2, H: 1 });
assertEqual(countLetters("LHL").L, 2);
assertEqual(countLetters("LHL").H, 1);
console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
