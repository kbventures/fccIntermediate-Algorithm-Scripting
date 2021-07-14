const chai = require('chai');
const expect = chai.expect;
const sumPrimes = require('../sumAllPrimes');

describe('Sum All Primes Test Suite', () => {
  it('sumPrimes(10) should return a number.', () => {
    const result = sumPrimes(10);
    expect(result).to.be.a('number');
  });

  it('sumPrimes(10) should return 17.', () => {
    const result = sumPrimes(10);
    expect(result).to.be.eql(17);
  });

  it('sumPrimes(977) should return 73156.', () => {
    const result = sumPrimes(977);
    expect(result).to.be.eql(73156);
  });
});
