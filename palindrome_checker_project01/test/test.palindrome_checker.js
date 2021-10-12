const palindrome = require('../palindrome_checker');
const chai = require('chai');
const expect = chai.expect;
const asserttype = require('chai-asserttype');
const should = require('should');
chai.use(asserttype);

describe('Palindrome Checker Test Suite', () => {
  it("palindrome('eye') should return a boolean", () => {
    const result = palindrome('eye');
    expect(result).to.be.boolean();
  });

  it("palindrome('eye') should return a true", () => {
    const result = palindrome('eye');
    expect(result).to.be.true;
  });

  it("palindrome('_eye') should return a true", () => {
    const result = palindrome('_eye');
    expect(result).to.be.true;
  });

  it("palindrome('race car') should return true", () => {
    const result = palindrome('race car');
    expect(result).to.be.true;
  });

  it("palindrome('not a palindrome') should return false", () => {
    const result = palindrome('not a palindrome');
    expect(result).to.be.false;
  });

  it("palindrome('A man, a plan, a canal. Panama') should return true", () => {
    const result = palindrome('A man, a plan, a canal. Panama');
    expect(result).to.be.true;
  });

  it("palindrome('never odd or even') should return false", () => {
    const result = palindrome('never odd or even');
    expect(result).to.be.true;
  });

  it("palindrome('nope') should return false", () => {
    const result = palindrome('nope');
    expect(result).to.be.false;
  });

  it("palindrome('almostomla') should return false", () => {
    const result = palindrome('almostomla');
    expect(result).to.be.false;
  });

  it("palindrome('My age is 0, 0, si ega ym.') should return true", () => {
    const result = palindrome('My age is 0, 0 si ega ym.');
    expect(result).to.be.true;
  });

  it("palindrome('1 eye for of 1 eye.') should return false", () => {
    const result = palindrome('1 eye for of 1 eye');
    expect(result).to.be.false;
  });

  it("palindrome('0_0 (: /- :) 0-0') should return true", () => {
    const result = palindrome('0_0 (: /- :) 0-0');
    expect(result).to.be.true;
  });

  it("palindrome('five|_/|four') should return false", () => {
    const result = palindrome('five|_/|four');
    expect(result).to.be.false;
  });
});
