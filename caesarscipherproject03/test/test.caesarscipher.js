const rot13 = require('../caesarscipher');
const chai = require('chai');
const expect = chai.expect;

describe('Caesar Cipher Test Suite', () => {
  it('rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP', () => {
    const result = rot13('SERR PBQR PNZC');
    expect(result).to.be.equal('FREE CODE CAMP');
  });

  it('rot13("SERR CVMMN!") should decode to the string FREE PIZZA!', () => {
    const result = rot13('SERR CVMMN!');
    expect(result).to.be.equal('FREE PIZZA!');
  });

  it('rot13("SERR YBIR?") should decode to the string FREE LOVE?', () => {
    const result = rot13('SERR YBIR?');
    expect(result).to.be.equal('FREE LOVE?');
  });

  it('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
    const result = rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
    expect(result).to.be.equal('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});
