const chai = require('chai');
const expect = chai.expect;
const smallestCommons = require('../smallestCommonMultiple');

describe('Smallest Common Multiple Test Suite', () => {
  it('smallestCommons([1, 5]) should return a number.', () => {
    const result = smallestCommons([1, 5]);
    expect(result).to.be.a('number');
  });

  it('smallestCommons([1, 5]) should return 60.', () => {
    const result = smallestCommons([1, 5]);
    expect(result).to.be.eql(60);
  });

  it('smallestCommons([5, 1]) should return 60.', () => {
    const result = smallestCommons([5, 1]);
    expect(result).to.be.eql(60);
  });

  it('smallestCommons([2, 10]) should return 2520.', () => {
    const result = smallestCommons([2, 10]);
    expect(result).to.be.eql(2520);
  });

  it('smallestCommons([1, 13]) should return 360360.', () => {
    const result = smallestCommons([1, 13]);
    expect(result).to.be.eql(360360);
  });

  it('smallestCommons([23, 18]) should return 6056820.', () => {
    const result = smallestCommons([23, 18]);
    expect(result).to.be.eql(6056820);
  });
});
