const chai = require('chai');
const expect = chai.expect;
const assertArray = require('chai-arrays');
chai.use(assertArray);
const seekAndDestroy = require('../03seekAndDestroy');

describe('Seek and Destroy Test Suite', () => {
  it('seekAndDestroy([1,2,3,1,2,3], 2,3) should return array [1,1]', () => {
    const seekAndDestroytReturnedResult = seekAndDestroy(
      [1, 2, 3, 1, 2, 3],
      2,
      3
    );
    expect(seekAndDestroytReturnedResult).to.be.eql([1, 1]);
  });

  it('seekAndDestroy([1,2,3,5,1,2,3], 2,3) should return array [1,5,1]', () => {
    const seekAndDestroytReturnedResult = seekAndDestroy(
      [1, 2, 3, 5, 1, 2, 3],
      2,
      3
    );
    expect(seekAndDestroytReturnedResult).to.be.eql([1, 5, 1]);
  });

  it('seekAndDestroy([3,5,1,2,2], 2,3,5) should return array [1]', () => {
    const seekAndDestroytReturnedResult = seekAndDestroy(
      [3, 5, 1, 2, 2],
      2,
      3,
      5
    );
    expect(seekAndDestroytReturnedResult).to.be.eql([1]);
  });

  it('seekAndDestroy([2,3,2,3],2,3) should return array []', () => {
    const seekAndDestroytReturnedResult = seekAndDestroy([2, 3, 2, 3], 2, 3);
    expect(seekAndDestroytReturnedResult).to.be.eql([]);
  });

  it('seekAndDestroy(["tree","hamburger",53],"tree",53) should return array ["hamburger"]', () => {
    const seekAndDestroytReturnedResult = seekAndDestroy(
      ['tree', 'hamburger', 53],
      'tree',
      53
    );
    expect(seekAndDestroytReturnedResult).to.be.eql(['hamburger']);
  });

  it('seekAndDestroy(["possum","trollo",12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan","yatch"], "yatch", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"] should return array [12,92,65]', () => {
    const seekAndDestroytReturnedResult = seekAndDestroy(
      [
        'possum',
        'trollo',
        12,
        'safari',
        'hotdog',
        92,
        65,
        'grandma',
        'bugati',
        'trojan',
        'yatch',
      ],
      'yatch',
      'possum',
      'trollo',
      'safari',
      'hotdog',
      'grandma',
      'bugati',
      'trojan'
    );
    expect(seekAndDestroytReturnedResult).to.be.eql([12, 92, 65]);
  });
});
