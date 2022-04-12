const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let total = num.reduce((acc, cur) => acc + cur, 0);
  return total;
};

const multiply = function(num) {
  let total = num.reduce((acc, cur) => acc * cur, 1);
  return total;
};

const power = function(num, pow) {
	let total = Math.pow(num, pow);
  return total;
};

const factorial = function(num) {
	let total = 1;
  for (let i = num; i > 1; i--) {
    total += total * (i - 1);
  }
  return total;
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
