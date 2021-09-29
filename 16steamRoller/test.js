function steamrollArray(arr) {
  // const flat = [].concat(...arr);
  // return flat.some(Array.isArray) ? steamrollArray(flat) : flat;

  const flat = [].concat(...arr);
  const flat1 = [].concat(arr);

  console.log(flat);

  console.log(flat1);
}

steamrollArray([1, [2], [3, [[4]]]]);
