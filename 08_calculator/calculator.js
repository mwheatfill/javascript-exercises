const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function (numbers) {
  return numbers.length
    ? numbers.reduce((product, number) => product * number)
    : 0;
};

const power = function (num, exp) {
  return num ** exp;
};

const factorial = function (n) {
  let result = 1;
  for (let i = 1; i < n; i++) {
    result *= i + 1
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
