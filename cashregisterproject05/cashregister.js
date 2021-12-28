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
    const POTENTIAL_DENOMINATIONS_REMOVABLE_CHANGE = Math.floor(
      changeDue / denomination
    );
    const CURRENT_MULTIPLES_CASH_REGISTER =
      cashDrawerArr[denominatorIndex][1] / denomination;

    if (
      CURRENT_MULTIPLES_CASH_REGISTER < POTENTIAL_DENOMINATIONS_REMOVABLE_CHANGE
    ) {
      STATUS_AND_CHANGE_DUE.change.push([
        denominatorString,
        CURRENT_MULTIPLES_CASH_REGISTER * denomination,
      ]);
      changeDue =
        changeDue - (CURRENT_MULTIPLES_CASH_REGISTER * denomination).toFixed(2);
    }
    if (
      CURRENT_MULTIPLES_CASH_REGISTER >=
      POTENTIAL_DENOMINATIONS_REMOVABLE_CHANGE
    ) {
      STATUS_AND_CHANGE_DUE.change.push([
        denominatorString,
        POTENTIAL_DENOMINATIONS_REMOVABLE_CHANGE * denomination,
      ]);
      changeDue = (
        changeDue -
        POTENTIAL_DENOMINATIONS_REMOVABLE_CHANGE * denomination
      ).toFixed(2);
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
