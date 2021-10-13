// https://blog.prepscholar.com/roman-numerals-converter

function convertToRoman(num) {
  let romanNumeral = [];
  let tempCounter = 0;

  if (num >= 3900) {
    let numberOfM = Math.floor(num / 1000);
    tempCounter = num % 3900;
    for (let i = 0; i < numberOfM; i++) romanNumeral.push('M');

    romanNumeral.push('CM');

    num = tempCounter;
    console.log(num);
    if (num === 0) return romanNumeral.join('');
  }

  if (num >= 1000) {
    let numberOfM = Math.floor(num / 1000);
    tempCounter = num % 1000;
    for (let i = 0; i < numberOfM; i++) romanNumeral.push('M');
    num = tempCounter;

    if (num === 0) return romanNumeral.join('');
  }
  if (num >= 500) {
    let numberOfD = Math.floor(num / 500);
    tempCounter = num % 500;
    for (let i = 0; i < numberOfD; i++) romanNumeral.push('D');
    num = tempCounter;
    if (num === 0) return romanNumeral.join('');
  }

  if (num >= 400) {
    romanNumeral.push('CD');
    tempCounter = num % 400;
    if (tempCounter == 0) {
      return romanNumeral.join('');
    }
    num = tempCounter;
  }

  if (num >= 100) {
    let numberOfC = Math.floor(num / 100);
    tempCounter = num % 100;
    for (let i = 0; i < numberOfC; i++) romanNumeral.push('C');
    num = tempCounter;
    if (num === 0) return romanNumeral.join('');
  }

  //
  if (num >= 90) {
    romanNumeral.push('XC');
    tempCounter = num % 90;
    if (tempCounter == 0) {
      return romanNumeral.join('');
    }
    num = tempCounter;
  }
  //

  if (num >= 50) {
    let numberOfL = Math.floor(num / 50);
    tempCounter = num % 50;
    for (let i = 0; i < numberOfL; i++) romanNumeral.push('L');
    num = tempCounter;
    if (num === 0) return romanNumeral.join('');
  }

  if (num >= 40) {
    romanNumeral.push('XL');
    tempCounter = num % 40;
    if (tempCounter == 0) {
      return romanNumeral.join('');
    }
    num = tempCounter;
  }

  if (num >= 10) {
    console.log(num);
    let numberOfX = Math.floor(num / 10);
    tempCounter = num % 10;
    for (let i = 0; i < numberOfX; i++) romanNumeral.push('X');
    num = tempCounter;
    if (num === 0) return romanNumeral.join('');
  }

  if (num >= 5 && num !== 9) {
    let numberOfV = Math.floor(num / 5);
    tempCounter = num % 5;
    for (let i = 0; i < numberOfV; i++) romanNumeral.push('V');
    num = tempCounter;
    console.log(num);
    if (num === 0) return romanNumeral.join('');
  }

  if (num == 9) {
    romanNumeral.push('IX');

    return romanNumeral.join('');
  }

  if (num == 4) {
    romanNumeral.push('IV');
    return romanNumeral.join('');
  } else {
    let numberOfI = Math.floor(num / 1);
    for (let i = 0; i < numberOfI; i++) romanNumeral.push('I');
    return romanNumeral.join('');
  }
}

const result = convertToRoman(3999);

console.log(result);

module.exports = convertToRoman;

/*

The symbol 
I represents a value of 1; 
V represents 5;
X represents 10;
L represents 50; 
C represents 100; 
D represents 500 and 
M represents 1000.

how to convert roman numerals:
https://blog.prepscholar.com/roman-numerals-converter

If a numeral comes after a numeral that is larger or equal in value,
then it must be added to the numeral before it.

The big rule to remember is that you can’t add more than three of the same Roman
numeral together. This is where subtraction comes into play. A smaller numeral
placed before a larger numeral indicates subtraction of that smaller numeral from
the larger one.

For example, to make the number 4, you can't just write IIII because you can’t
add more than three I’s together. What you’ll need to do is subtract 1 from 5
(I from V). To depict subtraction in Roman numerals, you must put the smaller numeral
 directly before the numeral it’s being subtracted from. For 4, 
 this would be IV (meaning V − I, or 5 − 1).

 Here’s another example: say you want to write the number 719 in Roman numerals.
  To start, you’d have to find the biggest value—that’s the hundreds. Remember that
   D stands for 500 and C stands for 100, so you can simply add these symbols together
    to form 700: DCC.

Now, we need to get 19. If you add 10 (X) and 5 (V) together, you’ll get 15.
 But you can’t add four I’s after that to get 19, as that would be more than three of
  the same numeral. Instead, you can use two X’s and subtract I from the second X.
   This would make XIX. Literally, this means X + (X − I), or 10 + (10 − 1), which, 
   as we know, equals 19.

Now, put these two parts together to get the Roman numeral combination for 719:
 DCCXIX.

Subtraction is only used for specific numbers and number combinations. These are 
any numbers that end with the digits 4 or 9, as well as the numbers 40, 90, 400,
 and 900:

 As you probably noticed above, Roman numerals only go up to M (1,000).
  According to the rules of addition and subtraction, this means that the biggest 
  number we can form in Roman numerals is MMMCMXCIX, or 3,999.

But there are ways you can represent numbers even higher than this.
*/
