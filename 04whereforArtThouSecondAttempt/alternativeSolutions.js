// 1
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     var srcKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(function(obj) {
//       for (var i = 0; i < srcKeys.length; i++) {
//         if (
//           !obj.hasOwnProperty(srcKeys[i]) ||
//           obj[srcKeys[i]] !== source[srcKeys[i]]
//         ) {
//           return false;
//         }
//       }
//       return true;
//     });
//   }

//   // test here
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" }
//     ],
//     { last: "Capulet" }
//   );

//2
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     var srcKeys = Object.keys(source);

//     return collection.filter(function(obj) {
//       return srcKeys.every(function(key) {
//         return obj.hasOwnProperty(key) && obj[key] === source[key];
//       });
//     });
//   }

//   // test here
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" }
//     ],
//     { last: "Capulet" }
//   );

//3
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     var srcKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(function(obj) {
//       return srcKeys
//         .map(function(key) {
//           return obj.hasOwnProperty(key) && obj[key] === source[key];
//         })
//         .reduce(function(a, b) {
//           return a && b;
//         });
//     });
//   }

//   // test here
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" }
//     ],
//     { last: "Capulet" }
//   );
