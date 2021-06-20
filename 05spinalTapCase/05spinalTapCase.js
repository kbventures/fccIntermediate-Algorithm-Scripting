function spinalCase(str) {
  // Adds space in front of all Captial letters and trims the outlying space
  let s = str.replace(/([A-Z])/g, ' $1').trim();
  // console.log(s);

  // Removes all _
  let test0 = s.replace(/\_/g, '');
  // console.log(test0);

  // Removes all emptry spaces when there are more than one of them
  let test0point1 = test0.replace(/\s\s+/g, ' ');
  // console.log(test0point1);

  // Replace empty spaces with -

  let test0point2 = test0point1.replace(/\s/g, '-').toLowerCase();
  console.log(test0point2);

  return test0point2;
}

// spinalCase('This Is Spinal Tap');
// spinalCase('thisIsSpinalTap');
// spinalCase('The_Andy_Griffith_Show');
// spinalCase('Teletubbies say Eh-oh');
// spinalCase('AllThe-small Things');

module.exports = spinalCase;

// split and replace

// // Remove all spaces
// let test123 = s.replace(/\s+/g, '');
// // console.log(test123);

// let test0123 = s.replace(/\s/g, '-').toLowerCase();
// // console.log(test0123);

// // Split using empty space
// let splited = str.replace(/\s/g, '-').toLowerCase();
// // console.log(splited);

// let test = s.replace(/\s/g, '-').toLowerCase();
// // console.log(test);
// let test1 = str.replace(/\_|\s/g, '-');
// // console.log(test1);
// let test3 = test1.replace(/([A-Z])/g, ' $1').trim();
// // console.log(test3);
// // return str.replace(/\_|\s/g, '-').toLowerCase();
