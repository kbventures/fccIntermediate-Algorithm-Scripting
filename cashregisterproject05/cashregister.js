function checkCashRegister(purchasePrice, cashReceived, cashDrawerArr) {
  const STATUS_AND_CHANGE_DUE = { status: 'OPEN', change: [] };
  let changeDue = cashReceived - purchasePrice;
  let sumCashRegister = 0;
  const LEGAL_TENDER_ARR = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];
  cashDrawerArr.forEach((denominations) => {
    sumCashRegister += denominations[1];
  });

  if (sumCashRegister == changeDue) {
    return { status: 'CLOSED', change: cashDrawerArr };
  }

  if (purchasePrice > cashReceived) {
    return { status: 'INSUFFICENT_FUNDS', change: [] };
  }
  if (purchasePrice === cashReceived) {
    return { status: 'OPEN', change: [] };
  }

  const CashRegister = (denomination, denominatorString, denominatorIndex) => {
    console.log(denomination, ' ', denominatorString, ' ', denominatorIndex);
    // How many potential denominator can we remove from change total
    let denominationMultiples = Math.floor(changeDue / denomination);
    // How many multiples of currenty denominator are currentlly in the cashReceived register
    let howManyCurrentMultiplesInCashRegister =
      cashDrawerArr[denominatorIndex][1] / denomination;
    // console.log(howManyCurrentMultiplesInCashRegister);
    // Not Enough 100 Dollar Bills In Cash Register
    if (howManyCurrentMultiplesInCashRegister < denominationMultiples) {
      STATUS_AND_CHANGE_DUE.change.push([
        denominatorString,
        howManyCurrentMultiplesInCashRegister * denomination,
      ]);
      changeDue =
        changeDue -
        (howManyCurrentMultiplesInCashRegister * denomination).toFixed(2);
      // console.log('Change due: ', changeDue);
    }
    // Enough 100 Multiples in Cash Register for Change
    if (howManyCurrentMultiplesInCashRegister >= denominationMultiples) {
      STATUS_AND_CHANGE_DUE.change.push([
        denominatorString,
        denominationMultiples * denomination,
      ]);
      changeDue = (changeDue - denominationMultiples * denomination).toFixed(2);
      // console.log('Change due: ', changeDue);
    }
  };
  let index = 0;
  // LEGAL_TENDER_ARR.forEach((denominations) => {
  //   // console.log(changeDue);
  //   if (changeDue / denominations[1] >= 1) {
  //     // console.log(denominations[0]);
  //     // console.log(denominations[1]);
  //     // console.log(index);
  //     CashRegister(denominations[1], denominations[0], index);
  //   }
  //   index += 1;
  // });

  if (changeDue / 100 >= 1) {
    let denomination = 100;
    let denominatorString = 'ONE HUNDRED';
    let denominatorIndex = 8;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }

  if (changeDue / 20 >= 1) {
    let denomination = 20;
    let denominatorString = 'TWENTY';
    let denominatorIndex = 7;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }
  if (changeDue / 10 >= 1) {
    let denomination = 10;
    let denominatorString = 'TEN';
    let denominatorIndex = 6;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }
  if (changeDue / 5 >= 1) {
    let denomination = 5;
    let denominatorString = 'FIVE';
    let denominatorIndex = 5;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }

  if (changeDue / 1 >= 1) {
    let denomination = 1;
    let denominatorString = 'ONE';
    let denominatorIndex = 4;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }

  if (changeDue / 0.25 >= 1) {
    let denomination = 0.25;
    let denominatorString = 'QUARTER';
    let denominatorIndex = 3;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }
  if (changeDue / 0.1 >= 1) {
    let denomination = 0.1;
    let denominatorString = 'DIME';
    let denominatorIndex = 2;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }

  if (changeDue / 0.05 >= 1) {
    let denomination = 0.05;
    let denominatorString = 'NICKEL';
    let denominatorIndex = 1;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }

  if (changeDue / 0.01 >= 1) {
    let denomination = 0.01;
    let denominatorString = 'PENNY';
    let denominatorIndex = 0;
    CashRegister(denomination, denominatorString, denominatorIndex);
  }

  if (changeDue != 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  // console.log('Return Object ', STATUSANDCHANGEDUEOBJECT);
  // console.log(STATUS_AND_CHANGE_DUE);

  return STATUS_AND_CHANGE_DUE;
}

checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);

module.exports = checkCashRegister;

/*
{
      status: 'OPEN',
      change: [
        ['TWENTY', 60],
        ['TEN', 20],
        ['FIVE', 15],
        ['ONE', 1],
        ['QUARTER', 0.5],
        ['DIME', 0.2],
        ['PENNY', 0.04],
      ],
    }
*/
