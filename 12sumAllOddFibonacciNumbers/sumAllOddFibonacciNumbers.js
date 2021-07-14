function sumFibs(num) {
  let previousFibonacciTotal = 1;
  let oneBeforePreviousFibonacciTotal = 1;
  let sumOfFibonacciNumbers = null;
  let sumOffOddNumbers = 1;

  while (sumOfFibonacciNumbers <= num) {
    sumOfFibonacciNumbers =
      previousFibonacciTotal + oneBeforePreviousFibonacciTotal;
    if (oneBeforePreviousFibonacciTotal % 2) {
      sumOffOddNumbers = sumOffOddNumbers + oneBeforePreviousFibonacciTotal;
    }
    previousFibonacciTotal = oneBeforePreviousFibonacciTotal;
    oneBeforePreviousFibonacciTotal = sumOfFibonacciNumbers;
  }
  return sumOffOddNumbers;
}

sumFibs(10);

module.exports = sumFibs;
