/*
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the 
new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it.
 For example if you mean to replace the word Book with the word dog, it should be replaced a
  Dog

*/

function myReplace(str, before, after) {
  var index = str.indexOf(before);
  console.log(index);
  let originalStringArrayToLowerCase = str.toLowerCase();

  let splitLowerCaseArray = originalStringArrayToLowerCase.split(' ');
  let splitOriginalArray = str.split(' ');

  let beforeToLowerCase = before.toLowerCase();

  let positionofWordToBeReplaced =
    splitLowerCaseArray.indexOf(beforeToLowerCase);

  if (
    splitOriginalArray[positionofWordToBeReplaced][0] ==
    splitOriginalArray[positionofWordToBeReplaced][0].toUpperCase()
  ) {
    let afterFirstLetterUpperCase = after[0].toUpperCase() + after.substring(1);
    return str.replace(
      splitOriginalArray[positionofWordToBeReplaced],
      afterFirstLetterUpperCase
    );
  }

  let afterFirstLetterLowerCase = after[0].toLowerCase() + after.substring(1);
  return str.replace(
    splitOriginalArray[positionofWordToBeReplaced],
    afterFirstLetterLowerCase
  );
}

const result = myReplace(
  'A quick brown fox Jumped over the lazy dog',
  'jumped',
  'Leaped'
);

console.log(result);

module.exports = myReplace;

// describe('searchAndReplace Test Suit', () => {
//   it('myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.', () => {
//     const result = myReplace('Let us go to the store', 'store', 'mall');
//     expect(result).to.be.eql('Let us go to the mall');
//   });
