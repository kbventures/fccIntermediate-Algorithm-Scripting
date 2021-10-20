const telephone_Number_Validator = require('../telephonenumbervalidator');
const chai = require('chai');
const expect = chai.expect;

describe('Telephone Number Validator Test Suite', () => {
  it('telephoneCheck("555-555-5555") should return a boolean.', () => {
    const result = telephone_Number_Validator('555-555-5555');
    expect(result).to.be.an('boolean');
  });

  it('telephoneCheck("1 555-555-5555") should return true.', () => {
    const result = telephone_Number_Validator('1 555-555-5555');
    expect(result).to.be.true;
  });

  it('telephoneCheck("1 (555) 555-5555") should return true.', () => {
    const result = telephone_Number_Validator('1 (555) 555-5555');
    expect(result).to.be.true;
  });

  it('telephoneCheck("5555555555") should return true', () => {
    const result = telephone_Number_Validator('5555555555');
    expect(result).to.be.true;
  });

  it('telephoneCheck("555-555-5555") should return true', () => {
    const result = telephone_Number_Validator('555-555-5555');
    expect(result).to.be.true;
  });

  it('telephoneCheck("(555)555-5555") should return true', () => {
    const result = telephone_Number_Validator('(555)555-5555');
    expect(result).to.be.true;
  });

  it('telephoneCheck("1(555)555-5555") should return true', () => {
    const result = telephone_Number_Validator('1(555)555-5555');
    expect(result).to.be.true;
  });

  it('telephoneCheck("555-5555") should return true', () => {
    const result = telephone_Number_Validator('555-5555');
    expect(result).to.be.false;
  });

  it('telephoneCheck("5555555") should return false', () => {
    const result = telephone_Number_Validator('5555555');
    expect(result).to.be.false;
  });

  it('telephoneCheck("1 555)555-5555") should return false', () => {
    const result = telephone_Number_Validator('1 555)555-5555');
    expect(result).to.be.false;
  });

  it('telephoneCheck("1 555 555 5555") should return false', () => {
    const result = telephone_Number_Validator('1 555 555 5555');
    expect(result).to.be.true;
  });

  it('telephoneCheck("1 456 789 4444") should return false', () => {
    const result = telephone_Number_Validator('1 456 789 4444');
    expect(result).to.be.true;
  });

  it('telephoneCheck("123**&!!asdf#") should return false.', () => {
    const result = telephone_Number_Validator('123**$!!asdf#');
    expect(result).to.be.false;
  });

  it('telephoneCheck("55555555") should return false.', () => {
    const result = telephone_Number_Validator('55555555');
    expect(result).to.be.false;
  });

  it('telephoneCheck("2 (757) 622-7382") should return false.', () => {
    const result = telephone_Number_Validator('2 (757) 622-7382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("0 (757) 622-7382") should return false.', () => {
    const result = telephone_Number_Validator('0 (757) 622-7382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("-1 (757) 622-7382") should return false.', () => {
    const result = telephone_Number_Validator('-1 (757) 622-7382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("2 757 622-7382") should return false.', () => {
    const result = telephone_Number_Validator('2 757 622-7382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("10 (757) 622-7382") should return false.', () => {
    const result = telephone_Number_Validator('10 (757) 622-7382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("27576227382") should return false.', () => {
    const result = telephone_Number_Validator('27576227382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("(275)76227382") should return false', () => {
    const result = telephone_Number_Validator('(275)76227382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("2(757)6227382") should return false.', () => {
    const result = telephone_Number_Validator('2(275)6227382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("2(757)622-7382") should return false.', () => {
    const result = telephone_Number_Validator('2(275)62207382');
    expect(result).to.be.false;
  });

  it('telephoneCheck("555)-555-5555") should return false.', () => {
    const result = telephone_Number_Validator('555)-555-5555');
    expect(result).to.be.false;
  });

  it('telephoneCheck("(555-555-5555)") should return false.', () => {
    const result = telephone_Number_Validator('(555-555-5555)');
    expect(result).to.be.false;
  });

  it('telephoneCheck("(555)5(55?)-5555") should return false.', () => {
    const result = telephone_Number_Validator('(555)5(55?)-5555');
    expect(result).to.be.false;
  });

  it('telephoneCheck("55 55-55-555-5") should return false.', () => {
    const result = telephone_Number_Validator('55 55-55-55-555-5');
    expect(result).to.be.false;
  });
});
