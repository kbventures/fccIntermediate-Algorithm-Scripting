function checkCashRegister(price, cash, cid) {
  let change_Return_Object = { status: 'OPEN', change: [] };
  let change_Due = cash - price;
  let temp_Change;
  let temp_Multiple;

  // Insuficient Fund Scenario &&  Scenario with Exact Change
  if (price > cash) {
    return { status: 'INSUFFICENT_FUNDS', change: [] };
  }
  if (price === cash) {
    return { status: 'OPEN', change: [] };
  }

  //First Scenario Where There are 100 Multiples
  if (change_Due / 100 >= 1) {
    console.log('Scenario 100');
    // remainder change to be calculated
    temp_Change = (change_Due % 100).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 20 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 100);
    console.log(temp_Multiple);

    // How many multiples of 100 are currentlly in the cash register
    console.log(
      'How many multiples of 100 are currentlly in the cash register'
    );
    let how_Many_Current_Multiples_In_Cash_Register = cid[8][1] / 100;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 100 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 100 Dollar Bills In Cash Register');
      change_Return_Object.change.push(
        'TWENTY',
        how_Many_Current_Multiples_In_Cash_Register * 100
      );
      console.log(change_Return_Object);
    }
    // Enough 20 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 100 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['ONE HUNDRED', temp_Multiple * 100]);
      console.log(change_Return_Object);
    }

    change_Due = temp_Change;
  }

  //First Scenario Where There are 20 Multiples
  if (change_Due / 20 >= 1) {
    console.log('Scenario 20');
    // remainder change to be calculated
    temp_Change = (change_Due % 20).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 20 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 20);
    console.log(temp_Multiple);

    // How many multiples of 20 are currentlly in the cash register
    console.log('How many multiples of 20 are currentlly in the cash register');
    let how_Many_Current_Multiples_In_Cash_Register = cid[7][1] / 20;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 20 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 20 Dollar Bills In Cash Register');
      change_Return_Object.change.push(
        'TWENTY',
        how_Many_Current_Multiples_In_Cash_Register * 20
      );
      console.log(change_Return_Object);
    }
    // Enough 20 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 20 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['ONE HUNDRED', temp_Multiple * 20]);
      console.log(change_Return_Object);
    }

    change_Due = temp_Change;
  }

  console.log('Final change_Return_Object');
  console.log(change_Return_Object);

  if (change_Due === 0) {
    return change_Return_Object;
  }

  return { status: 'INSUFFICENT_FUNDS', change: [] };
}

// checkCashRegister(101, 200, [
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

module.exports = checkCashRegister;

// checkCashRegister(19.5, 20, [
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

/*
should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
*/

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

/*
should return 

{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20],
["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
 */
