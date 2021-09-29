const chai = require('chai');
const steamrollArray = require('../steamRoller');
const expect = chai.expect;

describe('Streamroller test suite', () => {
  it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', () => {
    const result = steamrollArray([[['a']], [['b']]]);
    expect(result).to.eql(['a', 'b']);
  });

  it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', () => {
    const result = steamrollArray([1, [2], [3, [[4]]]]);
    expect(result).to.eql([1, 2, 3, 4]);
  });

  it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]j', () => {
    const result = steamrollArray([1, [], [3, [[4]]]]);
    expect(result).to.eql([1, 3, 4]);
  });

  it('steamrollArray() should return [1, {}, 3, 4]', () => {
    const result = steamrollArray([1, {}, [3, [[4]]]]);
    expect(result).to.eql([1, {}, 3, 4]);
  });
});
