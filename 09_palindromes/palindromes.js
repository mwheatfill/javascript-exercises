const palindromes = function (text) {
  processedText = text
    .toLowerCase()
    .replace(/[^a-z]/g, '')

  return (
    processedText
      .split('')
      .reverse()
      .join('') == processedText
  );
};

// Do not edit below this line
module.exports = palindromes;
