/*
You will be provided with an initial array (the first argument
in the destroyer function), followed by one or more 
arguments. Remove all elements from the initial array that
are of the same value as these arguments.
*/

const chai = require('chai');
const expect = chai.expect;
const assertArray = require('chai-arrays');
chai.use(assertArray);
const seekAndDestroy = require('../03seekAndDestroy');

describe('Seek and Destroy Test Suite', () => {
  it('seekAndDestroy([1,2,3,1,2,3], 2,3) should return array [1,1]', () => {
    let array = [1, 2, 3, 1, 2, 3];

    const seekAndDestroytReturnedResult = seekAndDestroy(
      [1, 2, 3, 1, 2, 3],
      2,
      3
    );
    return expect(seekAndDestroytReturnedResult).to.be.eql([1, 1]);
  });

  it('seekAndDestroy([1,2,3,5,1,2,3], 2,3) should return array [1,5,1]', () => {
    let array = [1, 2, 3, 5, 1, 2, 3];
    return null;
  });

  it('seekAndDestroy([3,5,1,2,2], 2,3,5) should return array [1]', () => {
    let array = [3, 5, 1, 2, 2];
    return null;
  });

  it('seekAndDestroy([2,3,2,3],2,3) should return array []', () => {
    let array = [2, 3, 2, 3];
    return null;
  });

  it('seekAndDestroy(["tree","hamburger",53],"tree",53) should return array ["hamburger"]', () => {
    let array = [1, 2, 3, 1, 2, 3];
    return null;
  });

  it('seekAndDestroy(["possum","trollo",12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan","yatch"], "yatch", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"] should return array [12,92,65]', () => {
    let array = [1, 2, 3, 1, 2, 3];
    return null;
  });
});
