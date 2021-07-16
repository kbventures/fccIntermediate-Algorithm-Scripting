function findRangeLow(num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
}

function whatIsLargestNumberInRange(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function isMultiple(currentRangeNum, counterNum) {
  if (counterNum % currentRangeNum == 0) {
    return true;
  }
  return false;
}

function smallestCommons(arr) {
  let allNumbersInRangAreNotMultipletOfCounter = true;
  let counter = whatIsLargestNumberInRange(arr[0], arr[1]);
  let rangeHigh = whatIsLargestNumberInRange(arr[0], arr[1]);
  let rangeLow = findRangeLow(arr[0], arr[1]);

  while (allNumbersInRangAreNotMultipletOfCounter) {
    allNumbersInRangAreNotMultipletOfCounter = false;
    for (let index = rangeLow; index <= rangeHigh; index++) {
      let currentRangeNumber = index;
      let isMultipleResult = isMultiple(currentRangeNumber, counter);

      if (!isMultipleResult) {
        allNumbersInRangAreNotMultipletOfCounter = true;
      }
    }
    if (!allNumbersInRangAreNotMultipletOfCounter) {
      return counter;
    }
    counter = counter + rangeHigh;
  }
}

smallestCommons([5, 1]);

module.exports = smallestCommons;
