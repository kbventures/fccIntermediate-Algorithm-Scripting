const chai = require('chai');
const dropElements = require('../dropIt');
const expect = chai.expect;

describe('Smallest Common Multiple Test Suite', () => {
  it('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].', () => {
    const result = dropElements([1, 2, 3, 4], function (n) {
      return n >= 3;
    });
    expect(result).to.eql([3, 4]);
  });

  it('dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].', () => {
    const result = dropElements([0, 1, 0, 1], function (n) {
      return n === 1;
    });
    expect(result).to.eql([1, 0, 1]);
  });

  it('dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].', () => {
    const result = dropElements([1, 2, 3], function (n) {
      return n > 0;
    });
    expect(result).to.eql([1, 2, 3]);
  });

  it('dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].', () => {
    const result = dropElements([1, 2, 3], function (n) {
      return n > 5;
    });
    expect(result).to.eql([]);
  });

  it('dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].', () => {
    const result = dropElements([1, 2, 3, 7, 4], function (n) {
      return n > 3;
    });
    expect(result).to.eql([7, 4]);
  });

  it('dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]..', () => {
    const result = dropElements([1, 2, 3, 9, 2], function (n) {
      return n > 2;
    });
    expect(result).to.eql([3, 9, 2]);
  });
});
