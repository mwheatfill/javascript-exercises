const palindromes = function (text) {
  let array = text.toLowerCase().match(/[a-zA-Z]/g);
  let forwardText = array.join('');
  let reverseText = '';

  for (i = array.length - 1; i >= 0; i--) {
    reverseText += array[i];
  }
  return forwardText === reverseText;
};

// Do not edit below this line
module.exports = palindromes;
