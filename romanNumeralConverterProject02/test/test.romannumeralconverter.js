const convertToRoman = require('../romanNumeralConverter');
const chai = require('chai');
const expect = chai.expect;

describe('Roman Numeral Converter Test Suite', () => {
  it('convertToRoman(2) should return the string II', () => {
    const result = convertToRoman(2);
    expect(result).to.be.string('II');
  });

  it('convertToRoman(3) should return the string III', () => {
    const result = convertToRoman(3);
    expect(result).to.be.string('III');
  });

  it('convertToRoman(4) should return the string IV', () => {
    const result = convertToRoman(3);
    expect(result).to.be.string('IV');
  });

  it('convertToRoman(5) should return the string V', () => {
    const result = convertToRoman(3);
    expect(result).to.be.string('V');
  });

  it('convertToRoman(9) should return the string IX', () => {
    const result = convertToRoman(3);
    expect(result).to.be.string('IX');
  });

  it('convertToRoman(12) should return the string XII', () => {
    const result = convertToRoman(12);
    expect(result).to.be.string('XII');
  });

  it('convertToRoman(16) should return the string XVI.', () => {
    const result = convertToRoman(16);
    expect(result).to.be.string('XVI');
  });

  it('convertToRoman(29) should return the string XXIV.', () => {
    const result = convertToRoman(16);
    expect(result).to.be.string('XXIX');
  });

  it('convertToRoman(44) should return the string XLIV.', () => {
    const result = convertToRoman(44);
    expect(result).to.be.string('XLIV');
  });

  it('convertToRoman(45) should return the string XLV.', () => {
    const result = convertToRoman(45);
    expect(result).to.be.string('XLV');
  });

  it('convertToRoman(68) should return the string LXVIII.', () => {
    const result = convertToRoman(68);
    expect(result).to.be.string('LXVIII');
  });

  it('convertToRoman(83) should return the string LXXXIII.', () => {
    const result = convertToRoman(83);
    expect(result).to.be.string('LXXXIII');
  });

  it('convertToRoman(97) should return the string XCVII.', () => {
    const result = convertToRoman(97);
    expect(result).to.be.string('XCVII');
  });

  it('convertToRoman(99) should return the string XCIX.', () => {
    const result = convertToRoman(99);
    expect(result).to.be.string('XCIX');
  });

  it('convertToRoman(400) should return the string CD.', () => {
    const result = convertToRoman(400);
    expect(result).to.be.string('CD');
  });

  it('convertToRoman(500) should return the string D.', () => {
    const result = convertToRoman(500);
    expect(result).to.be.string('D');
  });

  it('convertToRoman(501) should return the string DI.', () => {
    const result = convertToRoman(501);
    expect(result).to.be.string('DI');
  });

  it('convertToRoman(649) should return the string DCXLIX.', () => {
    const result = convertToRoman(649);
    expect(result).to.be.string('DCXLIX');
  });

  it('convertToRoman(798) should return the string DCCXCVIII.', () => {
    const result = convertToRoman(798);
    expect(result).to.be.string('DCCXCVIII');
  });

  it('convertToRoman(891) should return the string DCCCXCI.', () => {
    const result = convertToRoman(891);
    expect(result).to.be.string('DCCCXCI');
  });

  it('convertToRoman(1000) should return the string M.', () => {
    const result = convertToRoman(1000);
    expect(result).to.be.string('M');
  });

  it('convertToRoman(1004) should return the string MIV.', () => {
    const result = convertToRoman(1004);
    expect(result).to.be.string('MIV');
  });

  it('convertToRoman(1006) should return the string MVI.', () => {
    const result = convertToRoman(1006);
    expect(result).to.be.string('MVI');
  });

  it('convertToRoman(1023) should return the string MXXII.', () => {
    const result = convertToRoman(1023);
    expect(result).to.be.string('MXXIII');
  });

  it('convertToRoman(2014) should return the string MMXIV.', () => {
    const result = convertToRoman(2014);
    expect(result).to.be.string('MMXIV');
  });

  it('convertToRoman(3999) should return the string MMMCMXCIX.', () => {
    const result = convertToRoman(3999);
    expect(result).to.be.string('MMMCMXCIX');
  });
});
