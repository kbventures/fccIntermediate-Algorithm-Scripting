const map_the_debris = require('../map_the_debris');
const chai = require('chai');
const expect = chai.expect;

describe('Map The Debris Test Suite', () => {
  it('orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}]', () => {
    const result = map_the_debris([{ name: 'sputnik', avgAlt: 35873.5553 }]);
    console.log(result);
    expect(result).to.be.eql([{ name: 'sputnik', orbitalPeriod: 86400 }]);
  });

  it('orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].', () => {
    const result = map_the_debris([
      { name: 'iss', avgAlt: 413.6 },
      { name: 'hubble', avgAlt: 556.7 },
      { name: 'moon', avgAlt: 378632.553 },
    ]);
    expect(result).to.be.eql([
      { name: 'iss', orbitalPeriod: 5557 },
      { name: 'hubble', orbitalPeriod: 5734 },
      { name: 'moon', orbitalPeriod: 2377399 },
    ]);
  });
});
