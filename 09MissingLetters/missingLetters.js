function fearNotLetter(str) {
  const entireAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let position;
  let missingLetter;

  for (let index = 0; index < entireAlphabet.length; index++) {
    if (str[0] == entireAlphabet[index]) {
      position = index;
      break;
    }
  }

  for (let index = 0; index < str.length; index++) {
    if (str[index] !== entireAlphabet[position]) {
      missingLetter = entireAlphabet[position];
      break;
    }

    position++;
  }

  return missingLetter;
}

// fearNotLetter('abce');

fearNotLetter('abcdefghjklmno');

module.exports = fearNotLetter;
