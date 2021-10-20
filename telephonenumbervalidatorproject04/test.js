const test1 = '1 55f 555 5555';

const isSingledigitSpace3digitsSpace4Digits = /^[1]\s[0-9][0-9][0-9]/.test(
  test1
);

console.log(isSingledigitSpace3digitsSpace4Digits);
