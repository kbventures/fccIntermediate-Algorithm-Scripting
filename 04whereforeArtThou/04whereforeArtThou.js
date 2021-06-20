function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this
  const sourceKeys = Object.keys(source);

  // console.log(collection[0][sourceKeys]);

  // console.log(sourceKeys);

  arr = collection.filter((collectionObject) => {
    for (index = 0; index < sourceKeys.length; index++) {
      // console.log(collectionObject.hasOwnProperty(sourceKeys[index]));
      // console.log(source[]);
      // console.log('test');
      let temp = collectionObject[sourceKeys[index]];
      // console.log(temp);
      // console.log(source);
      // console.log(collectionObject[sourceKeys[index]]);
      // console.log(sourceKeys[index]);
      // console.log(source[sourceKeys[index]]);

      if (
        collectionObject.hasOwnProperty(sourceKeys[index]) &&
        collectionObject[sourceKeys[index]] === source[sourceKeys[index]]
      ) {
        // console.log(collectionObject[sourceKeys[index]]);
        // console.log(source[0]);
        // console.log(sourceKeys[index]);
        // console.log(collectionObject[sourceKeys[index]]);
        // console.log(sourceKeys[index]);
        return collectionObject;
      }
    }
  });
  // Only change code above this line
  // STUB
  // console.log(arr);

  // arr = [{ first: 'Tybalt', last: 'Capulet' }];
  return arr;
}

// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' },
//   ],
//   { last: 'Capulet' }
// );

// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, bat: 2 }
// );

module.exports = whatIsInAName;
