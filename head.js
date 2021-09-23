const assertEqual = require('./assertEqual');

let head = function(array) {
  let firstEle = array[0];
  if (array === []) {
    return undefined;
  }
  return firstEle;
};
module.exports = head;
