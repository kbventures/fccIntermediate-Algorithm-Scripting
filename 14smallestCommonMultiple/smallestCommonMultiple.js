function isMultiple(currentRangeNum, counterNum) {
  if (counterNum % currentRangeNum == 0) {
    return true;
  }
  return false;
}

function smallestCommons(arr) {
  let allNumbersInRangAreNotMultipletOfCounter = true;
  let counter = 1;

  let ascendingOrDescending = arr[1];
  if (arr[1] < arr[0]) {
    ascendingOrDescending = arr[0];
  }

  // Algorithm continues as long as all numbers in range not multiple of counter
  while (allNumbersInRangAreNotMultipletOfCounter) {
    allNumbersInRangAreNotMultipletOfCounter = false;
    // For Loop groups goes through range of ascending numbers ie: 1 to 5
    for (let index = 0; index < ascendingOrDescending; index++) {
      let currentRangeNumber = index + 1;

      let isMultipleResult = isMultiple(currentRangeNumber, counter);

      if (!isMultipleResult) {
        allNumbersInRangAreNotMultipletOfCounter = true;
      }
    }
    if (!allNumbersInRangAreNotMultipletOfCounter) {
      return counter;
    }
    counter++;
  }

  return counter;
}

smallestCommons([5, 1]);

module.exports = smallestCommons;
