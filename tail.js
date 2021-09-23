const assertEqual = require('./assertEqual');

let tail = function(array) {
  if ((array.length === 1) || (array === [])) {
    return [];
  }
  let lastEles = array.slice(1);
  return lastEles;
};
module.exports = tail;