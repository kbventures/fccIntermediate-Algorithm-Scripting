function checkCashRegister(price, cash, cid) {
  let change_Return_Object = { status: 'OPEN', change: [] };
  let change_Due = cash - price;
  let temp_Change;
  let temp_Multiple;
  let sum_of_cash_register = 0;
  let denominatorNumber;
  let writtenDenominator = '';
  let cidIndex;

  cid.forEach((element) => {
    sum_of_cash_register = sum_of_cash_register += element[1];
  });
  if (sum_of_cash_register == change_Due) {
    return { status: 'CLOSED', change: cid };
  }

  if (price > cash) {
    return { status: 'INSUFFICENT_FUNDS', change: [] };
  }
  if (price === cash) {
    return { status: 'OPEN', change: [] };
  }

  const cashRegister = (denominatorNumber, writtenDenominator, cidIndex) => {
    console.log(
      'Denominator ',
      denominatorNumber,
      'Written ',
      writtenDenominator
    );
    // remainder change to be calculated
    temp_Change = (change_Due % denominatorNumber).toFixed(2);
    // How many potential denominator can we remove from change total
    temp_Multiple = Math.floor(change_Due / denominatorNumber);
    // How many multiples of currenty denominator are currentlly in the cash register
    let how_Many_Current_Multiples_In_Cash_Register =
      cid[cidIndex][1] / denominatorNumber;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 100 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      change_Return_Object.change.push([
        writtenDenominator,
        how_Many_Current_Multiples_In_Cash_Register * denominatorNumber,
      ]);
      change_Due =
        change_Due -
        (
          how_Many_Current_Multiples_In_Cash_Register * denominatorNumber
        ).toFixed(2);
      console.log('Change due: ', change_Due);
    }
    // Enough 100 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      change_Return_Object.change.push([
        writtenDenominator,
        temp_Multiple * denominatorNumber,
      ]);
      change_Due = (change_Due - temp_Multiple * denominatorNumber).toFixed(2);
      console.log('Change due: ', change_Due);
    }
  };

  if (change_Due / 100 >= 1) {
    denominatorNumber = 100;
    writtenDenominator = 'ONE HUNDRED';
    cidIndex = 8;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }

  if (change_Due / 20 >= 1) {
    denominatorNumber = 20;
    writtenDenominator = 'TWENTY';
    cidIndex = 7;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }
  if (change_Due / 10 >= 1) {
    denominatorNumber = 10;
    writtenDenominator = 'TEN';
    cidIndex = 6;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }
  if (change_Due / 5 >= 1) {
    denominatorNumber = 5;
    writtenDenominator = 'FIVE';
    cidIndex = 5;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }

  if (change_Due / 1 >= 1) {
    denominatorNumber = 1;
    writtenDenominator = 'ONE';
    cidIndex = 4;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }

  if (change_Due / 0.25 >= 1) {
    denominatorNumber = 0.25;
    writtenDenominator = 'QUARTER';
    cidIndex = 3;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }
  if (change_Due / 0.1 >= 1) {
    denominatorNumber = 0.1;
    writtenDenominator = 'DIME';
    cidIndex = 2;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }

  if (change_Due / 0.05 >= 1) {
    denominatorNumber = 0.05;
    writtenDenominator = 'NICKEL';
    cidIndex = 1;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }

  if (change_Due / 0.01 >= 1) {
    denominatorNumber = 0.01;
    writtenDenominator = 'PENNY';
    cidIndex = 0;
    cashRegister(denominatorNumber, writtenDenominator, cidIndex);
  }

  if (change_Due != 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  console.log('Return Object ', change_Return_Object);

  return change_Return_Object;
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
