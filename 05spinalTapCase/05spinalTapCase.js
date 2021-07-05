function spinalCase(string) {
  let spaceAddedInFrontOfCapitalLettersAndEdgeSpaceTrimmed = string
    .replace(/([A-Z])/g, ' $1')
    .trim();


  let allUnderScoresRemoved =
    spaceAddedInFrontOfCapitalLettersAndEdgeSpaceTrimmed.replace(
      /\_/g,
      ''
    );
  let removeEmptySPacesWhenTwoInARow = allUnderScoresRemoved.replace(
    /\s\s+/g,
    ' '
  );

  let replaceEmptySpacesWithDash = removeEmptySPacesWhenTwoInARow
    .replace(/\s/g, '-')
    .toLowerCase();

  return replaceEmptySpacesWithDash;
}

// For Testing
spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');
spinalCase('AllThe-small Things');

module.exports = spinalCase;

// Solution 1
// function spinalCase(str) {
//   // Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;

//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

//   // Replace space and underscore with -
//   return str.replace(regex, "-").toLowerCase();
// }

// // test here
// spinalCase("This Is Spinal Tap");

//Solution 2
// function spinalCase(str) {
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // Split on whitespace and underscores and join with dash
//   return str
//     .toLowerCase()
//     .split(/(?:_| )+/)
//     .join("-");
// }

// // test here
// spinalCase("This Is Spinal Tap");

// Solution 3
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins

//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }
