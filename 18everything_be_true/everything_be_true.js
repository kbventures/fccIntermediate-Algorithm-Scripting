function truthCheck(collection, pre) {
  let result = true;

  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }

  return result;
}

// truthCheck(
//   [
//     { user: 'Tinky-Winky', sex: 'male' },
//     { user: 'Dipsy', sex: 'male' },
//     { user: 'Laa-Laa', sex: 'female' },
//     { user: 'Po', sex: 'female' },
//   ],
//   'sex'
// );

module.exports = truthCheck;
