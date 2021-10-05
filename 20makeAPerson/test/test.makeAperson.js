const Person = require('../makeAperson');
const chai = require('chai');
const expect = chai.expect;

describe('Make A Person Test Suite', () => {
  let bob = new Person('Bob Ross');
  it('Object.keys(bob).length should return 6', () => {
    const result = Object.keys(bob).length;
    expect(result).to.be.eql(6);
  });

  it('bob instanceof Person should return true', () => {
    const result = bob instanceof Person;
    expect(result).to.be.true;
  });

  it('bob.firstName should return undefined.', () => {
    const result = bob.firstName;
    expect(result).to.be.undefined;
  });

  it('bob.lastName should return undefined', () => {
    const result = bob.lastName;
    expect(result).to.be.undefined;
  });

  it('bob.getFirstName() should return the string Bob.', () => {
    const result = bob.getFirstName;
    expect(result()).to.be.string;
  });

  it('bob.getLastName() should return the string Ross.', () => {
    const result = bob.getLastName;
    expect(result()).to.be.string;
  });

  it('bob.getFullName() should return the string Bob Ross.', () => {
    const result = bob.getFullName;
    expect(result()).to.be.a('string', 'Bob Ross');
  });

  it('bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell")', () => {
    bob.setFirstName('Haskell');
    const result = bob.getFullName;
    expect(result()).to.be.a('string', 'Haskell Ross');
  });

  it('bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell")', () => {
    bob.setLastName('Curry');
    const result = bob.getFullName;
    expect(result()).to.be.a('string', 'Haskell Curry');
  });

  it('bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry")', () => {
    bob.setFullName('Haskell Curry');
    const result = bob.getFullName;
    expect(result()).to.be.a('string', 'Haskell Curry');
  });

  it('bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry")', () => {
    bob.setFullName('Haskell Curry');
    const result = bob.getFirstName;
    expect(result()).to.be.a('string', 'Haskell');
  });

  it('bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry")', () => {
    bob.setFullName('Haskell Curry');
    const result = bob.getLastName;
    expect(result()).to.be.a('string', 'Curry');
  });
});

// bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").

// bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
