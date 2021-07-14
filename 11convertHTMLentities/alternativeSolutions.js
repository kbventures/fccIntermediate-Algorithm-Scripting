// Solution 1

// function convertHTML(str) {
//     // Split by character to avoid problems.

//     var temp = str.split("");

//     // Since we are only checking for a few HTML elements, use a switch

//     for (var i = 0; i < temp.length; i++) {
//       switch (temp[i]) {
//         case "<":
//           temp[i] = "&lt;";
//           break;
//         case "&":
//           temp[i] = "&amp;";
//           break;
//         case ">":
//           temp[i] = "&gt;";
//           break;
//         case '"':
//           temp[i] = "&quot;";
//           break;
//         case "'":
//           temp[i] = "&apos;";
//           break;
//       }
//     }

//     temp = temp.join("");
//     return temp;
//   }

// Solutions 2
// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };
//   // Using a regex, replace characters with it's corresponding html entity
//   return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
// }

// // test here
// convertHTML("Dolce & Gabbana");

// Solutions3

// function convertHTML(str) {
//     // Use Object Lookup to declare as many HTML entities as needed.
//     const htmlEntities = {
//       "&": "&amp;",
//       "<": "&lt;",
//       ">": "&gt;",
//       '"': "&quot;",
//       "'": "&apos;"
//     };
//     // Using a regex, replace characters with it's corresponding html entity
//     return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
//   }

//   // test here
//   convertHTML("Dolce & Gabbana");
