function dropElements(arr, func) {
  let splicedArrayFromPositionWhereFunctionTrueFirstTime;
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index])) {
      splicedArrayFromPositionWhereFunctionTrueFirstTime = arr.splice(index);
      return splicedArrayFromPositionWhereFunctionTrueFirstTime;
    }
  }

  return [];
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

module.exports = dropElements;
