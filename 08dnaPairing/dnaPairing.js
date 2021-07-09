// function pairElement(str) {
//   return [
//     ['A', 'T'],
//     ['T', 'A'],
//     ['C', 'G'],
//     ['G', 'C'],
//     ['A', 'T'],
//   ];
// }

// pairElement('ATCGA');

// module.exports = pairElement;

function pairElement(str) {
  let dnaPairs = [];

  for (let index = 0; index < str.length; index++) {
    if (str[index] == 'A') {
      dnaPairs.push(['A', 'T']);
    }
    if (str[index] == 'T') {
      dnaPairs.push(['T', 'A']);
    }
    if (str[index] == 'C') {
      dnaPairs.push(['C', 'G']);
    }

    if (str[index] == 'G') {
      dnaPairs.push(['G', 'C']);
    }
  }
  return dnaPairs;
}

pairElement('ATCGA');

module.exports = pairElement;
