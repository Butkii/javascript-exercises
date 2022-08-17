const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, nextItem) => total + nextItem, 0);
};

const multiply = function(array) {
  return array.reduce((total, nextItem) => total * nextItem, 1);
};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function(x) {
	const arr = Array.from(Array(x), (_, i) => i+1);
  return arr.reduce((total, nextItem) => total * nextItem, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
