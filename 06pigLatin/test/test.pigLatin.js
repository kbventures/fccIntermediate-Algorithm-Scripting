const chai = require('chai');
const expect = chai.expect;
const translatePigLatin = require('../06pigLatin');

describe('pigLatin Test Suite', () => {
  it('translatePigLatin(/"california/") should return the string aliforniacay', () => {
    const result = translatePigLatin('california');
    expect(result).to.be.eql('aliforniacay');
  });
  it('translatePigLatin(/"paragraphs/") should return the string paragraphs', () => {
    const result = translatePigLatin('paragraphs');
    expect(result).to.be.eql('aragraphspay');
  });
  it('translatePigLatin(/"glove/") should return the string aliforniacay', () => {
    const result = translatePigLatin('glove');
    expect(result).to.be.eql('oveglay');
  });
  it('translatePigLatin(/"algorithm/") should return the string aliforniacay', () => {
    const result = translatePigLatin('algorithm');
    expect(result).to.be.eql('algorithmway');
  });
  it('translatePigLatin(/"eight/") should return the string aliforniacay', () => {
    const result = translatePigLatin('eight');
    expect(result).to.be.eql('eightway');
  });
  it('translatePigLatin(/"schwartz/") should return the string aliforniacay', () => {
    const result = translatePigLatin('schwartz');
    expect(result).to.be.eql('artzschway');
  });
  it('translatePigLatin(/"rhythm/") should return the string aliforniacay', () => {
    const result = translatePigLatin('rhythm');
    expect(result).to.be.eql('rhythmay');
  });
});
