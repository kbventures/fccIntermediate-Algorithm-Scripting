//https://stackoverflow.com/questions/20669166/how-to-efficiently-check-if-a-key-value-pair-exists-in-a-javascript-dictionary
// https://codereview.stackexchange.com/questions/162652/check-existence-of-matching-key-value-pair
// https://www.codegrepper.com/code-examples/javascript/loop+through+key+value+pairs+javascript

const whatIsInAName = (collection, source) => {
  var arr = [];
  // Only change code below this line

  function hasKeySetTo(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] == value;
  }

  for (let i = 0; i < collection.length; i++) {
    let counter = true;
    Object.keys(source).forEach((key) => {
      if (!hasKeySetTo(collection[i], key, source[key])) {
        counter = false;
      }
    });
    if (counter) [arr.push(collection[i])];
  }

  // Only change code above this line

  return arr;
};

// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' },
//   ],
//   { first: 'Tybalt', last: 'Capulet' }
// );

module.exports = whatIsInAName;
