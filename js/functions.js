function isStringLengthLessOrEqual(str, length) {
  return str.length <= length;
}

isStringLengthLessOrEqual('qwerty', 2);

function isPalindrome(str) {
  const cleanedString = str.replaceAll(' ', '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}

isPalindrome('qweewq');

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

getAllNumbersFromString('0xd-30');
