function rot13(str) {
  let decodedString = '';

  for (let i = 0; i < str.length; i++) {
    // 65 to 90 equals to A to Z Uppercase
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      // This Cipher as shifted backwards 13 cases
      let tempIndex = str.charCodeAt(i) + 13;
      if (tempIndex > 64 && tempIndex < 91) {
        decodedString = decodedString + String.fromCharCode(tempIndex);
      } else {
        decodedString =
          decodedString + String.fromCharCode(tempIndex - 90 + 64);
      }
    } else {
      decodedString = decodedString + String.fromCharCode(str.charCodeAt(i));
    }
  }

  return decodedString;
}

rot13('SERR PBQR PNZC');

module.exports = rot13;

// Ascii Code Chart
// https://www.ascii-code.com/
