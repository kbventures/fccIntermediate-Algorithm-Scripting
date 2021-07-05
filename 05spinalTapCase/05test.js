// Solution 1 Free Code Camp

function spinalCase(str) {
  //   console.log(str);
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  console.log(str);

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// For Testing
spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');
spinalCase('AllThe-small Things');
