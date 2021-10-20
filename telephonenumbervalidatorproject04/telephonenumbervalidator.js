'use strict';

// function telephoneCheck(str) {
//   let first3AreNumbers = /^\d{10}/;

//   // const result = first3AreNumbers.test(str);

//   var checkForSpecialCharacters = /^[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//   // const test = str.test(

//   const result = checkForSpecialCharacters.test(str);
//   console.log(str);

//   const resultRemovedSpecialCharacters = str.replace(
//     /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g,
//     ''
//   );
//   console.log(resultRemovedSpecialCharacters);

//   if (result) {
//     return false;
//   }
//   return true;
// }

// telephoneCheck('(55555  !55555');

// module.exports = telephoneCheck;

/*
Special characters at beginning makes it false
Important conditions & task
Remove all special characters
Remove Spaces
Greater than 11 and less than 10 is false
If exackly 11 digits only 1

Check how many digits
If certain amount of digit check if first digit equals 1




No special characters at beginning
First 11 or 10 characters
If 11 only 1 as first digit
Finally onlly certain formats are accepted
555-555-5555
5555555555
555-555-5555
(555)555-5555


1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
1 456 789 4444
*/

function telephoneCheck(str) {
  const resultRemovedSpecialCharacters = str.replace(
    /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g,
    ''
  );

  const isNum = /^\d+$/.test(str);

  if (resultRemovedSpecialCharacters.length < 10) {
    return false;
  } else if (resultRemovedSpecialCharacters.length === 11 && str[0] !== '1') {
    return false;
  } else if (resultRemovedSpecialCharacters.length === 10) {
    const is3digitsHyphen3digitsHyphen4Digits =
      /^[0-9][0-9][0-9][-][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]/.test(str);
    if (isNum) {
      return true;
    } else if (is3digitsHyphen3digitsHyphen4Digits) {
      return true;
    }

    return false;
  } else if (resultRemovedSpecialCharacters.length === 11) {
    const isSingledigitSpace3digitsSpace4Digits =
      /^[1]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]/.test(str);

    if (isSingledigitSpace3digitsSpace4Digits) {
      return true;
    }
    console.log('test2');
  } else {
    return false;
  }
}

telephoneCheck('1 555 555 5555');

module.exports = telephoneCheck;

// 555-555-5555
// 5555555555 DONE
// 555-555-5555
// (555)555-5555
