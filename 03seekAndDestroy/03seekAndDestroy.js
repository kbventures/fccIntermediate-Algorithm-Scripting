function removeFromArrayArgumentsOfSameValue(initialArrayAndArguments) {
  const argumentsArray = Array.prototype.slice.call(arguments);

  // Seperate Initial Array From Arguments to be removed
  const elementsToBeRemoved = argumentsArray.splice(1);
  const initialArray = argumentsArray[0];

  return initialArray.filter(
    (initalArrayElement) => !elementsToBeRemoved.includes(initalArrayElement)
  );
}

removeFromArrayArgumentsOfSameValue([1, 2, 3, 1, 2, 3], 2, 3);

module.exports = removeFromArrayArgumentsOfSameValue;

/*
Alternate Solution from FCC 1

function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }npm 
    }
  }
  return arr.filter(item => item !== null);
}


Alternate Solution from FCC 2

function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}


Alternate Solution from FCC 3

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
*/
