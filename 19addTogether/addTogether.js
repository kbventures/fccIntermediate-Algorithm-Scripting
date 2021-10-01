'use strict';

function addTogether() {
  let argumentAddTogether0 = arguments[0];
  let argumentAddTogether1 = arguments[1];

  if (typeof argumentAddTogether0 !== 'number') {
    return undefined;
  }
  if (arguments.length > 1 && typeof argumentAddTogether1 !== 'number') {
    return undefined;
  }
  if (typeof argumentAddTogether1 !== 'number') {
    return (argumentAddTogether1) => {
      if (typeof argumentAddTogether1 !== 'number') {
        return undefined;
      }
      return argumentAddTogether1 + arguments[0];
    };
  }

  return argumentAddTogether0 + argumentAddTogether1;
}

addTogether(5, '3');
// console.log(addTogether(5, '3'));

// console.log(addTogether(5, '3'));

module.exports = addTogether;

// https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/

// function addTogether() {
//   let arg1 = arguments[0];
//   let arg2 = arguments[1];

//   if (typeof arg2 !== 'number') {
//     return (arg1) => {
//       let arg0 = arguments[0];
//       if (typeof arg0 !== 'number') {
//         return undefined;
//       }
//       console.log('test');
//       return arg1 + arguments[0];
//     };
//   }
//   if (typeof arg1 !== 'number') {
//     return undefined;
//   }

// function addTogether() {
//   let argumentAddTogether0 = arguments[0];
//   let argumentAddTogether1 = arguments[1];

//   if (typeof argumentAddTogether1 !== 'number') {
//     return (argumentAddTogether1) => {
//       let argumentAnonymousArray = arguments[0];
//       if (typeof argumentAnonymousArray !== 'number') {
//         console.log('argumentAnonymousArray Not a Number');
//         return undefined;
//       }
//       return argumentAddTogether1 + arguments[0];
//     };
//   }

//   if (typeof argumentAddTogether0 !== 'number') {
//     return undefined;
//   }

//   return argumentAddTogether0 + argumentAddTogether1;
// }
