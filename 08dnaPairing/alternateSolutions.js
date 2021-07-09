// Solutions 1

// function pairElement(str) {
//   // Return each strand as an array of two elements, the original and the pair.
//   var paired = [];

//   // Function to check with strand to pair.
//   var search = function (char) {
//     switch (char) {
//       case 'A':
//         paired.push(['A', 'T']);
//         break;
//       case 'T':
//         paired.push(['T', 'A']);
//         break;
//       case 'C':
//         paired.push(['C', 'G']);
//         break;
//       case 'G':
//         paired.push(['G', 'C']);
//         break;
//     }
//   };

//   // Loops through the input and pair.
//   for (var i = 0; i < str.length; i++) {
//     search(str[i]);
//   }

//   return paired;
// }

// // test here
// pairElement('GCG');

// Solutions 2
// function pairElement(str) {
//     //create object for pair lookup
//     var pairs = {
//       A: "T",
//       T: "A",
//       C: "G",
//       G: "C"
//     };
//     //split string into array of characters
//     var arr = str.split("");
//     //map character to array of character and matching pair
//     return arr.map(x => [x, pairs[x]]);
//   }

//   //test here
//   pairElement("GCG");
