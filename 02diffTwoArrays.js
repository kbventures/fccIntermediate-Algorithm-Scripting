// Imperative Solution

function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Declarative Attempt
function diffArrayDeclarative(arr1, arr2) {
  var newArr = [];
  const concatArr1And2 = arr1.concat(arr2);
  const solution = concatArr1And2.filter((x) => {
    return arr2.indexOf(x) === -1 || arr1.indexOf(x) === -1;
  });
  return newArr;
}

diffArrayDeclarative([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Declarative solution 1
// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Declarative Solution 2
// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//   function diff(a, b) {
//     return a.filter(item => b.indexOf(item) === -1);
//   }
// }
