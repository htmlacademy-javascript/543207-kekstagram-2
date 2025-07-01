function isStringLengthLessOrEqual(str, length) {
  return str.length <= length;
}

function isPalindrome(str) {
  const cleanedString = str.replaceAll(' ', '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}

function getAllNumbersFromString(value) {
  const string = value.toString();
  let number = '';

  for (let i = 0; i < string.length; i++) {
    const symbol = parseInt(string[i], 10);
    if (!Number.isNaN(symbol)) {
      number += symbol;
    }
  }

  return number.length ? parseInt(+number, 10) : NaN;
}

