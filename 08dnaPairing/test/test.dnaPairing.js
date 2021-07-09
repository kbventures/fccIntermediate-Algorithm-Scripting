const chai = require('chai');
const expect = chai.expect;
const dnaPairing = require('../dnaPairing');

describe('dnaPairing Test Suite', () => {
  it('pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].', () => {
    const result = dnaPairing('ATCGA');
    expect(result).to.be.eql([
      ['A', 'T'],
      ['T', 'A'],
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'T'],
    ]);
  });

  it('pairElement("ATCGA") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].', () => {
    const result = dnaPairing('TTGAG');
    expect(result).to.be.eql([
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C'],
    ]);
  });

  it('pairElement("ATCGA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].', () => {
    const result = dnaPairing('CTCTA');
    expect(result).to.be.eql([
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T'],
    ]);
  });
});
