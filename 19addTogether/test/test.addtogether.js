'use strict';

const addTogether = require('../addTogether');
const chai = require('chai');
const expect = chai.expect;
const should = require('should');

describe('addTogether Test suite', () => {
  it('addTogether(2,3) shoud return 5', () => {
    const result = addTogether(2, 3);
    expect(result).to.be.eql(5);
  });

  it('addTogether(23, 30) should return 53', () => {
    const result = addTogether(23, 30);
    expect(result).to.be.eql(53);
  });

  it('addTogether(5)(7) should return 12', () => {
    const result = addTogether(5)(7);
    expect(result).to.be.eql(12);
  });

  it('addTogether() should return undefined', () => {
    const result = addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    expect(result).to.be.eql(undefined);
  });

  it('addTogether(2, "3") should return undefined', () => {
    const result = addTogether(2, '3');
    should(result).undefined;
  });

  it('addTogether(2)([3]) should return undefined', () => {
    const result = addTogether(2, [3]);
    should(result).undefined;
  });
});
