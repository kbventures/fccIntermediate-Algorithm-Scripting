const chai = require('chai');
const expect = chai.expect;
const sumFibs = require('../sumAllOddFibonacciNumbers');

describe('Sum All Odd Fibonacci Test Suite', () => {
  it('sumFibs(1) should return a number.', () => {
    const result = sumFibs(1);

    expect(result).to.be.an('number');
  });

  it('sumFibs(1000) should return 1785.', () => {
    const result = sumFibs(1000);
    expect(result).to.be.eql(1785);
  });
  it('sumFibs(4000000) should return 4163732.', () => {
    const result = sumFibs(4000000);
    expect(result).to.be.eql(4613732);
  });

  it('sumFibs(4) should return 5.', () => {
    const result = sumFibs(4);
    expect(result).to.be.eql(5);
  });

  it('sumFibs(75024) should return 60696.', () => {
    const result = sumFibs(75024);
    expect(result).to.be.eql(60696);
  });

  it('sumFibs(75024) should return 135721.', () => {
    const result = sumFibs(75025);
    expect(result).to.be.eql(135721);
  });
});
