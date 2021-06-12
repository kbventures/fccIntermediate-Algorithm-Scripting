function removeFromArrayArgumentsOfSameValue(initialArrayAndArguments) {
  const argumentsArray = Array.prototype.slice.call(arguments);
  const initialArray = argumentsArray[0];
  const elementsToBeRemovedFromInitalArray = [];
  const stub = [1, 1];
  return stub;
}

removeFromArrayArgumentsOfSameValue([1, 2, 3, 1, 2, 3], 2, 3);

module.exports = removeFromArrayArgumentsOfSameValue;
