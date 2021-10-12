'use strict';

function palindrome(str) {
  let removeSpecialCharacters = str.replace(/[^A-Z0-9]/gi, '');

  removeSpecialCharacters = removeSpecialCharacters.toLowerCase();

  let strLength = removeSpecialCharacters.length;

  if (strLength % 2 !== 0) {
    let theMiddleIndex = Math.floor(strLength / 2);
    for (let i = 0; i < theMiddleIndex; i++) {
      if (
        removeSpecialCharacters[i] !== removeSpecialCharacters[strLength - 1]
      ) {
        return false;
      }
      --strLength;
    }
  } else {
    for (let y = 0; y < removeSpecialCharacters.length; y++) {
      if (
        removeSpecialCharacters[y] !== removeSpecialCharacters[strLength - 1]
      ) {
        return false;
      }

      --strLength;
    }
  }

  return true;
}

module.exports = palindrome;
