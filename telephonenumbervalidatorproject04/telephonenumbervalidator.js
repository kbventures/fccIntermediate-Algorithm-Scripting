'use strict';

function telephoneCheck(str) {
  const removedAllSpecialCharacters = str.replace(
    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g,
    ''
  );

  const isNum = /^[0-9]+$/.test(str);

  if (removedAllSpecialCharacters.length < 10) {
    return false;
  } else if (removedAllSpecialCharacters.length === 11 && str[0] !== '1') {
    return false;
  } else if (removedAllSpecialCharacters.length === 10) {
    //
    const is3digitsHyphen3digitsHyphen4Digits =
      /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}/.test(str);

    const isParenthesis3digitsParenthesis3digitsHyphen4Digits =
      /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/.test(str);
    //
    if (isNum) {
      return true;
    } else if (is3digitsHyphen3digitsHyphen4Digits) {
      return true;
    } else if (isParenthesis3digitsParenthesis3digitsHyphen4Digits) {
      return true;
    }

    return false;
  } else if (removedAllSpecialCharacters.length === 11) {
    const isSingleDigitSpace3DigitsSpaceDigitsSpace4Digits =
      /^[1]\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/.test(str);

    const isSingleDigitSpace3DigitsHyphen3DigitsHyphen4Digits =
      /^[1]\s[0-9]{3}[-][0-9]{3}[-][0-9]{4}/.test(str);

    const isSingleDigitsSpaceParenthesis3DigitsParenthesisSpace3DigitsHyphen4Digits =
      /^[1]\s[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{4}/.test(str);

    const isSingleDigitParenthesis3DigitsParenthesis3DigitsHyphen4Digits =
      /^[1][(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/.test(str);

    if (isSingleDigitSpace3DigitsSpaceDigitsSpace4Digits) {
      return true;
    }

    if (isSingleDigitSpace3DigitsHyphen3DigitsHyphen4Digits) {
      return true;
    }
    if (
      isSingleDigitsSpaceParenthesis3DigitsParenthesisSpace3DigitsHyphen4Digits
    ) {
      return true;
    }

    if (isSingleDigitParenthesis3DigitsParenthesis3DigitsHyphen4Digits) {
      return true;
    }
    return false;
  } else {
    return false;
  }
}

console.log(telephoneCheck('1 555)555-5555'));

module.exports = telephoneCheck;

('use strict');

function telephoneCheck(str) {
  const removedAllSpecialCharacters = str.replace(
    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g,
    ''
  );

  const isNum = /^[0-9]+$/.test(str);

  if (removedAllSpecialCharacters.length < 10) {
    return false;
  } else if (removedAllSpecialCharacters.length === 11 && str[0] !== '1') {
    return false;
  } else if (removedAllSpecialCharacters.length === 10) {
    //
    const is3digitsHyphen3digitsHyphen4Digits =
      /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}/.test(str);

    const isParenthesis3digitsParenthesis3digitsHyphen4Digits =
      /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/.test(str);
    //
    if (isNum) {
      return true;
    } else if (is3digitsHyphen3digitsHyphen4Digits) {
      return true;
    } else if (isParenthesis3digitsParenthesis3digitsHyphen4Digits) {
      return true;
    }

    return false;
  } else if (removedAllSpecialCharacters.length === 11) {
    const isSingleDigitSpace3DigitsSpaceDigitsSpace4Digits =
      /^[1]\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/.test(str);

    const isSingleDigitSpace3DigitsHyphen3DigitsHyphen4Digits =
      /^[1]\s[0-9]{3}[-][0-9]{3}[-][0-9]{4}/.test(str);

    const isSingleDigitsSpaceParenthesis3DigitsParenthesisSpace3DigitsHyphen4Digits =
      /^[1]\s[(][0-9]{3}[)]\s[0-9]{3}[-][0-9]{4}/.test(str);

    const isSingleDigitParenthesis3DigitsParenthesis3DigitsHyphen4Digits =
      /^[1][(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/.test(str);

    if (isSingleDigitSpace3DigitsSpaceDigitsSpace4Digits) {
      return true;
    }

    if (isSingleDigitSpace3DigitsHyphen3DigitsHyphen4Digits) {
      return true;
    }
    if (
      isSingleDigitsSpaceParenthesis3DigitsParenthesisSpace3DigitsHyphen4Digits
    ) {
      return true;
    }

    if (isSingleDigitParenthesis3DigitsParenthesis3DigitsHyphen4Digits) {
      return true;
    }
    return false;
  } else {
    return false;
  }
}

console.log(telephoneCheck('1 555)555-5555'));

module.exports = telephoneCheck;
