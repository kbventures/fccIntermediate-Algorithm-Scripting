// Alternative 1

// function steamrollArray(arr) {
//   const flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

// steamrollArray([1, [2], [3, [[4]]]]);

// Solution 2

// function steamrollArray(arr) {
//   return arr
//     .toString()
//     .replace(',,', ',') // "1,2,,3" => "1,2,3"
//     .split(',') // ['1','2','3']
//     .map(function (v) {
//       if (v == '[object Object]') {
//         // bring back empty objects
//         return {};
//       } else if (isNaN(v)) {
//         // if not a number (string)
//         return v;
//       } else {
//         return parseInt(v); // if a number in a string, convert it
//       }
//     });
// }

//Solution 3
// function steamrollArray(val,flatArr=[]) {
//     val.forEach(item => {
//       if (Array.isArray(item)) steamrollArray(item, flatArr);
//       else flatArr.push(item);
//     });
//     return flatArr;
//   }

//Solution 4
function steamrollArray(val, flatArr = []) {
  val.forEach((item) => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
