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
    // How many potential denominator can we remove from change total
    const DENOMINATION_MULTIPLES = Math.floor(changeDue / denomination);
    // How many multiples of currenty denominator are currentlly in the cashReceived register
    const HOW_MANY_CURRENT_MULTIPLES_CASH_IN_REGISTER =
      cashDrawerArr[denominatorIndex][1] / denomination;
    console.log(HOW_MANY_CURRENT_MULTIPLES_CASH_IN_REGISTER);
    // Not Enough 100 Dollar Bills In Cash Register
    if (HOW_MANY_CURRENT_MULTIPLES_CASH_IN_REGISTER < DENOMINATION_MULTIPLES) {
      STATUS_AND_CHANGE_DUE.change.push([
        denominatorString,
        HOW_MANY_CURRENT_MULTIPLES_CASH_IN_REGISTER * denomination,
      ]);
      changeDue =
        changeDue -
        (HOW_MANY_CURRENT_MULTIPLES_CASH_IN_REGISTER * denomination).toFixed(2);
      // console.log('Change due: ', changeDue);
    }
    // Enough 100 Multiples in Cash Register for Change
    if (HOW_MANY_CURRENT_MULTIPLES_CASH_IN_REGISTER >= DENOMINATION_MULTIPLES) {
      STATUS_AND_CHANGE_DUE.change.push([
        denominatorString,
        DENOMINATION_MULTIPLES * denomination,
      ]);
      changeDue = (changeDue - DENOMINATION_MULTIPLES * denomination).toFixed(
        2
      );
      // console.log('Change due: ', changeDue);
    }
  };
  let index = 8;
  LEGAL_TENDER_ARR.forEach((denominations) => {
    if (changeDue / denominations[1] >= 1) {
      CashRegister(denominations[1], denominations[0], index);
    }
    index -= 1;
  });

  if (changeDue != 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

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
