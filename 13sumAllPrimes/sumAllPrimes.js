function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      return false;
    }
  }

  return true;
}

function sumPrimes(num) {
  let sum = null;
  for (let index = 2; index <= num; index++) {
    if (isPrime(index)) {
      sum = sum + index;
    }
  }

  return sum;
}

sumPrimes(2);

module.exports = sumPrimes;
