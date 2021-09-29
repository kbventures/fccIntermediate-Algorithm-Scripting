function binaryAgent(str) {
  const binaryArray = str.split(' ');
  const baseBinary = [128, 64, 32, 16, 8, 4, 2, 1];
  let phrase = '';

  for (let i = 0; i < binaryArray.length; i++) {
    let currentNumber = 0;
    for (let y = 0; y <= 7; y++) {
      if (binaryArray[i][y] === '0') {
      } else {
        currentNumber = currentNumber + baseBinary[y];
      }
    }

    phrase += String.fromCharCode(currentNumber);
  }
  return phrase;
}

module.exports = binaryAgent;
