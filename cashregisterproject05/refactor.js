// function checkCashRegister(price, cash, cid) {
//   let change_Return_Object = { status: 'OPEN', change: [] };
//   let change_Due = cash - price;
//   let temp_Change;
//   let temp_Multiple;
//   let sum_of_cash_register = 0;
//   let denominatorNumber;
//   let writtenDenominator = '';

//   cid.forEach((element) => {
//     sum_of_cash_register = sum_of_cash_register += element[1];
//   });
//   if (sum_of_cash_register == change_Due) {
//     return { status: 'CLOSED', change: cid };
//   }

//   if (price > cash) {
//     return { status: 'INSUFFICENT_FUNDS', change: [] };
//   }
//   if (price === cash) {
//     return { status: 'OPEN', change: [] };
//   }

//   const cashRegister = (denominatorNumber, writtenDenominator) => {
//     // remainder change to be calculated
//     temp_Change = (change_Due % denominatorNumber).toFixed(2);
//     // How many potential 100 can we remove from change total
//     temp_Multiple = Math.floor(change_Due / denominatorNumber);
//     // How many multiples of 100 are currentlly in the cash register
//     let how_Many_Current_Multiples_In_Cash_Register =
//       cid[8][1] / denominatorNumber;
//     // Not Enough 100 Dollar Bills In Cash Register
//     if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
//       change_Return_Object.change.push([
//         writtenDenominator,
//         how_Many_Current_Multiples_In_Cash_Register * denominatorNumber,
//       ]);
//       change_Due =
//         change_Due -
//         how_Many_Current_Multiples_In_Cash_Register * denominatorNumber;
//     }
//     // Enough 100 Multiples in Cash Register for Change
//     if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
//       change_Return_Object.change.push([
//         writtenDenominator,
//         temp_Multiple * denominatorNumber,
//       ]);
//       change_Due = change_Due - temp_Multiple * denominatorNumber;
//     }
//   };

//   if (change_Due / 100 >= 1) {
//     denominatorNumber = 100;
//     writtenDenominator = 'ONE HUNDRED';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }

//   if (change_Due / 20 >= 1) {
//     denominatorNumber = 20;
//     writtenDenominator = 'TWENTY';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }
//   if (change_Due / 10 >= 1) {
//     denominatorNumber = 10;
//     writtenDenominator = 'TEN';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }
//   if (change_Due / 5 >= 1) {
//     denominatorNumber = 5;
//     writtenDenominator = 'FIVE';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }

//   if (change_Due / 1 >= 1) {
//     denominatorNumber = 1;
//     writtenDenominator = 'ONE';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }

//   if (change_Due / 0.25 >= 1) {
//     denominatorNumber = 0.25;
//     writtenDenominator = 'QUARTER';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }
//   if (change_Due / 0.1 >= 1) {
//     denominatorNumber = 0.1;
//     writtenDenominator = 'DIME';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }

//   if (change_Due / 0.05 >= 1) {
//     denominatorNumber = 0.05;
//     writtenDenominator = 'NICKEL';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }

//   if (change_Due / 0.01 >= 1) {
//     denominatorNumber = 0.01;
//     writtenDenominator = 'PENNY';
//     cashRegister(denominatorNumber, writtenDenominator);
//   }

//   if (change_Due != 0) {
//     return { status: 'INSUFFICIENT_FUNDS', change: [] };
//   }

//   return change_Return_Object;
// }

// checkCashRegister(19.5, 105, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]);

// module.exports = checkCashRegister;
