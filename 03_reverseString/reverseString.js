const reverseString = function(string) {
  const stringArray = string.split('');
  let reverseString = '';

  for (let i = stringArray.length -1; i >= 0; --i) {
    reverseString += stringArray[i];
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
