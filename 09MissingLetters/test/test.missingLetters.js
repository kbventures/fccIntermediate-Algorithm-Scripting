const chai = require('chai');
const expect = chai.expect;
const fearNotLetter = require('../missingLetters');

describe('Missing Letters Test Suite', () => {
  it('fearNotLetter("abce") should return the string d.', () => {
    const result = fearNotLetter('abce');
    expect(result).to.be.eql('d');
  });

  it('fearNotLetter("abcdefghjklmno") should return the string i.', () => {
    const result = fearNotLetter('abcdefghjklmno');
    expect(result).to.be.eql('i');
  });

  it('fearNotLetter("stvwx") should return the string u.', () => {
    const result = fearNotLetter('stvwx');
    expect(result).to.be.eql('u');
  });

  it('fearNotLetter("bcdf") should return the string e.', () => {
    const result = fearNotLetter('bcdf');
    expect(result).to.be.eql('e');
  });

  it('fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.', () => {
    const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz');
    expect(result).to.be.eql(undefined);
  });
});
