const fibonacci = function (n) {
  if (n <= 0) {
    return 'OOPS';
  }

  let previousN = 1;
  let nextN = 1;
  let array = [previousN, nextN];

  for (i = 1; i < n; i++) {
    let sum = previousN + nextN;
    array.push(sum);
    previousN = nextN;
    nextN = sum;
  }
  return array[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
