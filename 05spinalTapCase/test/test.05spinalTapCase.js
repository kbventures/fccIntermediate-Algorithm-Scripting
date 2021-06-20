const chai = require('chai');
const expect = chai.expect;
const spinalTapCase = require('../05spinalTapCase');

describe('spinalTapCase Test Suite', () => {
  it('spinalCase(/This Is Spinal Tap/);', () => {
    const result = spinalTapCase('This Is Spinal Tap');
    expect(result).to.be.eql('this-is-spinal-tap');
  });

  it('spinalCase(/thisIsSpinalTap/);', () => {
    const result = spinalTapCase('thisIsSpinalTap');
    expect(result).to.be.eql('this-is-spinal-tap');
  });

  it('spinalCase(/The_Andy_Griffith_Show/);', () => {
    const result = spinalTapCase('The_Andy_Griffith_Show');
    expect(result).to.be.eql('the-andy-griffith-show');
  });

  it('spinalCase(/Teletubbies say Eh-oh/);', () => {
    const result = spinalTapCase('Teletubbies say Eh-oh');
    expect(result).to.be.eql('teletubbies-say-eh-oh');
  });

  it('spinalCase(/AllThe-small Things/);', () => {
    const result = spinalTapCase('AllThe-small Things');
    expect(result).to.be.eql('all-the-small-things');
  });
});
