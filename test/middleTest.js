const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;

//Test code
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle(["1", "2", "3"]),["2"]); // => ["2"]
assertArraysEqual(middle([1, 2, 3,4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([]),[]); // => []
assertArraysEqual(middle([1,2]),[]); // => []

describe("middle", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });

  it("returns ['2'] for ['1','2','3']", () => {
    assert.deepEqual(middle(["1", "2", "3"]),["2"]); 
  });

  it("returns '[2,3]' for [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3,4]), [2,3]); 
  });

  it("returns '[]' for []", () => {
    assert.deepEqual(middle([]),[]); 
  });

  it("returns '[]' for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]); 
  });

});