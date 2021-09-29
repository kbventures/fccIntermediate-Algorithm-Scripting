const words = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];
const capWords = words.forEach(capitalize);

function capitalize(word, index, arr) {
  arr[index] = word[0].toUpperCase() + word.substring(1);
}
console.log(words);

console.log(capWords);
