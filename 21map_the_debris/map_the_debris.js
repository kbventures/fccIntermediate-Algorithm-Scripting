'use strict';

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var new_array = [];

  arr.map((x) => {
    let a = earthRadius + x.avgAlt;
    let current_orbital_period = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM)
    );
    new_array.push({ name: x.name, orbitalPeriod: current_orbital_period });
  });

  return new_array;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
// orbitalPeriod([
//   { name: 'iss', avgAlt: 413.6 },
//   { name: 'hubble', avgAlt: 556.7 },
//   { name: 'moon', avgAlt: 378632.553 },
// ]);

module.exports = orbitalPeriod;
