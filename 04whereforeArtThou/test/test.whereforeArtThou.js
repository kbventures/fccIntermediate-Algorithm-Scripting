const chai = require('chai');
const expect = chai.expect;
const assertArray = require('chai-arrays');
chai.use(assertArray);
const whereForeArtThou = require('../04whereforeArtThou');

describe('whereforeArtThou Test Suit', () => {
  it('whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]', () => {
    const whereforeArtThouResult = whereForeArtThou(
      [
        { first: 'Romeo', last: 'Montague' },
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },
      ],
      { last: 'Capulet' }
    );
    expect(whereforeArtThouResult).to.be.eql([
      { first: 'Tybalt', last: 'Capulet' },
    ]);
  });

  it('whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]', () => {
    const whereforeArtThouResult = whereForeArtThou(
      [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }],
      { apple: 1 }
    );
    expect(whereforeArtThouResult).to.be.eql([
      { apple: 1 },
      { apple: 1 },
      { apple: 1, bat: 2 },
    ]);
  });

  it(' whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]', () => {
    const whereforeArtThouResult = whereForeArtThou(
      [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, bat: 2 }
    );
    expect(whereforeArtThouResult).to.be.eql([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ]);
  });
});

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// Reasoning still works

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
