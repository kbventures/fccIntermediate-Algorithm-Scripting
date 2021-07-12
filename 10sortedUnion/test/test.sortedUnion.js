const chai = require('chai');
const expect = chai.expect;
const uniteUnique = require('../sortedUnion');

describe('Sorted Union Test Suite', () => {
  it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].', () => {
    const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    expect(result).to.be.eql([1, 3, 2, 5, 4]);
  });

  it('uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].', () => {
    const result = uniteUnique([1, 2, 3], [5, 2, 1]);
    expect(result).to.be.eql([1, 2, 3, 5]);
  });

  it('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].', () => {
    const result = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
    expect(result).to.be.eql([1, 2, 3, 5, 4, 6, 7, 8]);
  });
});
