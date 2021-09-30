const everything_be_true = require('../everything_be_true');
const chai = require('chai');
const expect = chai.expect;

describe('True be True Test Suite', () => {
  it('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true', () => {
    const result = everything_be_true(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    );
    expect(result).to.be.true;
  });

  it('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")', () => {
    const result = everything_be_true(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    );
    expect(result).to.be.false;
  });

  it('truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")', () => {
    const result = everything_be_true(
      [
        { user: 'Tinky-Winky', sex: 'male', age: 0 },
        { user: 'Dipsy', sex: 'male', age: 3 },
        { user: 'Laa-Laa', sex: 'female', age: 5 },
        { user: 'Po', sex: 'female', age: 4 },
      ],
      'age'
    );
    expect(result).to.be.false;
  });

  it('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")', () => {
    const result = everything_be_true(
      [
        { name: 'Pete', onBoat: true },
        { name: 'Repeat', onBoat: true },
        { name: 'FastForward', onBoat: null },
      ],
      'onBoat'
    );
    expect(result).to.be.false;
  });

  it('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true', () => {
    const result = everything_be_true(
      [
        { name: 'Pete', onBoat: true },
        { name: 'Repeat', onBoat: true, alias: 'Repete' },
        { name: 'FastForward', onBoat: true },
      ],
      'onBoat'
    );
    expect(result).to.be.true;
  });

  it('truthCheck([{"single": "yes"}], "single")', () => {
    const result = everything_be_true([{ single: 'yes' }], 'single');
    expect(result).to.be.true;
  });

  it('truthCheck([{"single": ""}, {"single": "double"}], "single")', () => {
    const result = everything_be_true(
      [{ single: '' }, { single: 'double' }],
      'single'
    );
    expect(result).to.be.false;
  });

  it('truthCheck([{"single": "double"}, {"single": undefined}], "single")', () => {
    const result = everything_be_true(
      [{ single: '' }, { single: 'double' }],
      'single'
    );
    expect(result).to.be.false;
  });

  it('truthCheck([{"single": "double"}, {"single": NaN}], "single")', () => {
    const result = everything_be_true(
      [{ single: 'double' }, { single: NaN }],
      'single'
    );
    expect(result).to.be.false;
  });
});
