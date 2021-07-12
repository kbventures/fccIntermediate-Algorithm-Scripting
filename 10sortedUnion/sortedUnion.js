function uniteUnique(arr) {
  const unitedArraysUniqueValuesOriginlOrder = arguments[0];
  const firstArray = arguments[0];

  for (let index = 0; index < arguments.length; index++) {
    const filtered = arguments[index].filter((number) => {
      if (!unitedArraysUniqueValuesOriginlOrder.includes(number)) {
        unitedArraysUniqueValuesOriginlOrder.push(number);
      }
    });
  }

  return unitedArraysUniqueValuesOriginlOrder;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

module.exports = uniteUnique;
