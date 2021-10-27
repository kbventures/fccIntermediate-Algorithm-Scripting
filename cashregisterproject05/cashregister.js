function checkCashRegister(price, cash, cid) {
  let change_Return_Object = { status: 'OPEN', change: [] };
  let change_Due = cash - price;
  let temp_Change;
  let temp_Multiple;

  // FInal two steps add up total of cash in cash register and if this is equal to the change you can do the status closed return

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

    // How many potential 100 can we remove from change total
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
      change_Return_Object.change.push([
        'ONE HUNDRED',
        how_Many_Current_Multiples_In_Cash_Register * 100,
      ]);
      change_Due =
        change_Due - how_Many_Current_Multiples_In_Cash_Register * 100;
      console.log(
        'Not Enough 100 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 100 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 100 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['ONE HUNDRED', temp_Multiple * 100]);
      console.log(change_Return_Object);

      change_Due = change_Due - temp_Multiple * 100;
      console.log(
        'Not Enough 100 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
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
      change_Return_Object.change.push([
        'TWENTY',
        how_Many_Current_Multiples_In_Cash_Register * 20,
      ]);
      change_Due = (
        change_Due -
        how_Many_Current_Multiples_In_Cash_Register * 20
      ).toFixed(2);
      console.log(
        'Not Enough 20 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 20 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 20 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['TWENTY', temp_Multiple * 20]);
      console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 20).toFixed(2);
      console.log(
        'Not Enough 20 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
  }

  if (change_Due / 10 >= 1) {
    console.log('Scenario 10');
    // remainder change to be calculated
    temp_Change = (change_Due % 10).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 10 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 10);
    console.log(temp_Multiple);

    // How many multiples of 10 are currentlly in the cash register
    console.log('How many multiples of 10 are currentlly in the cash register');
    let how_Many_Current_Multiples_In_Cash_Register = cid[6][1] / 10;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 10 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 10 Dollar Bills In Cash Register');
      change_Return_Object.change.push([
        'TEN',
        how_Many_Current_Multiples_In_Cash_Register * 10,
      ]);
      change_Due = (
        change_Due -
        how_Many_Current_Multiples_In_Cash_Register * 10
      ).toFixed(2);
      console.log(
        'Not Enough 10 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 10 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 10 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['TEN', temp_Multiple * 10]);
      console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 10).toFixed(2);
      console.log(
        'Not Enough 10 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
  }

  if (change_Due / 5 >= 1) {
    console.log('Scenario 5');
    // remainder change to be calculated
    temp_Change = (change_Due % 5).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 5 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 5);
    console.log(temp_Multiple);

    // How many multiples of 5 are currentlly in the cash register
    console.log('How many multiples of 5 are currentlly in the cash register');
    let how_Many_Current_Multiples_In_Cash_Register = cid[5][1] / 5;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 10 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 5 Dollar Bills In Cash Register');
      change_Return_Object.change.push([
        'FIVE',
        how_Many_Current_Multiples_In_Cash_Register * 5,
      ]);
      change_Due = (
        change_Due -
        how_Many_Current_Multiples_In_Cash_Register * 5
      ).toFixed(2);
      console.log(
        'Not Enough 5 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 5 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 5 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['FIVE', temp_Multiple * 5]);
      console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 5).toFixed(2);
      console.log(
        'Not Enough 5 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
  }

  if (change_Due / 1 >= 1) {
    console.log('Scenario 1');
    // remainder change to be calculated
    temp_Change = (change_Due % 1).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 1 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 1);
    console.log(temp_Multiple);

    // How many multiples of 1 are currentlly in the cash register
    console.log('How many multiples of 1 are currentlly in the cash register');
    let how_Many_Current_Multiples_In_Cash_Register = cid[4][1] / 1;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 1 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 1 Dollar Bills In Cash Register');
      change_Return_Object.change.push([
        'ONE',
        how_Many_Current_Multiples_In_Cash_Register * 1,
      ]);
      change_Due = (
        change_Due -
        how_Many_Current_Multiples_In_Cash_Register * 1
      ).toFixed(2);
      console.log(
        'Not Enough 1 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 1 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 1 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['ONE', temp_Multiple * 1]);
      console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 1).toFixed(2);
      console.log(
        'Not Enough 1 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
  }

  if (change_Due / 0.25 >= 1) {
    console.log('Scenario 0.25');
    // remainder change to be calculated
    temp_Change = (change_Due % 0.25).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 0.25 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 0.25);
    console.log(temp_Multiple);

    // How many multiples of 0.25 are currentlly in the cash register
    console.log('How many multiples of 1 are currentlly in the cash register');
    let how_Many_Current_Multiples_In_Cash_Register = cid[3][1] / 0.25;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 0.25 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 1 Dollar Bills In Cash Register');
      change_Return_Object.change.push([
        'QUARTER',
        how_Many_Current_Multiples_In_Cash_Register * 0.25,
      ]);
      change_Due = (
        change_Due -
        how_Many_Current_Multiples_In_Cash_Register * 0.25
      ).toFixed(2);
      console.log(
        'Not Enough 0.25 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 0.25 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 0.25 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['QUARTER', temp_Multiple * 0.25]);
      console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 0.25).toFixed(2);
      console.log(
        'Not Enough 0.25 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
  }

  if (change_Due / 0.1 >= 1) {
    console.log('Scenario 0.1');
    // remainder change to be calculated
    temp_Change = (change_Due % 0.1).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 0.1 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 0.1);
    console.log(temp_Multiple);

    // How many multiples of 0.1 are currentlly in the cash register
    console.log(
      'How many multiples of 0.1 are currentlly in the cash register'
    );
    let how_Many_Current_Multiples_In_Cash_Register = cid[2][1] / 0.1;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 0.1 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 0.1 Dollar Bills In Cash Register');
      change_Return_Object.change.push([
        'DIME',
        how_Many_Current_Multiples_In_Cash_Register * 0.1,
      ]);
      change_Due = (
        change_Due -
        how_Many_Current_Multiples_In_Cash_Register * 0.1
      ).toFixed(2);
      console.log(
        'Not Enough 0.1 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 1 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 0.1 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['DIME', temp_Multiple * 0.1]);
      console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 0.1).toFixed(2);
      console.log(
        'Not Enough 0.1 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
  }

  if (change_Due / 0.05 >= 1) {
    console.log('Scenario 0.05');
    // remainder change to be calculated
    temp_Change = (change_Due % 0.05).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 0.05 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 0.05);
    console.log(temp_Multiple);

    // How many multiples of 0.05 are currentlly in the cash register
    console.log(
      'How many multiples of 0.05 are currentlly in the cash register'
    );
    let how_Many_Current_Multiples_In_Cash_Register = cid[1][1] / 0.05;
    console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 0.05 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      console.log('Not Enough 0.05 Dollar Bills In Cash Register');
      change_Return_Object.change.push([
        'NICKEL',
        how_Many_Current_Multiples_In_Cash_Register * 0.05,
      ]);
      change_Due = (
        change_Due -
        how_Many_Current_Multiples_In_Cash_Register * 0.05
      ).toFixed(2);
      console.log(
        'Not Enough 0.05 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
    // Enough 1 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      console.log('Enough 0.05 Multiples in Cash Register for Change');
      change_Return_Object.change.push(['NICKEL', temp_Multiple * 0.05]);
      console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 0.05).toFixed(2);
      console.log(
        'Not Enough 0.05 Dollar Bills In Cash Register Result and Update'
      );
      console.log(change_Return_Object);
      console.log(change_Due);
    }
  }

  if (change_Due / 0.01 >= 1) {
    console.log('Scenario 0.01');
    // remainder change to be calculated
    temp_Change = (change_Due % 0.01).toFixed(2);
    console.log('Temp Change');
    console.log(temp_Change);

    // How many potential 0.01 can we remove from change total
    temp_Multiple = Math.floor(change_Due / 0.01);
    // console.log(temp_Multiple);

    // How many multiples of 0.01 are currentlly in the cash register
    // console.log(
    //   'How many multiples of 0.01 are currentlly in the cash register'
    // );
    let how_Many_Current_Multiples_In_Cash_Register = cid[0][1] / 0.01;
    // console.log(how_Many_Current_Multiples_In_Cash_Register);
    // Not Enough 0.01 Dollar Bills In Cash Register
    if (how_Many_Current_Multiples_In_Cash_Register < temp_Multiple) {
      // console.log('Not Enough 0.01 Dollar Bills In Cash Register');
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }
    // Enough 0.01 Multiples in Cash Register for Change
    if (how_Many_Current_Multiples_In_Cash_Register >= temp_Multiple) {
      // console.log('Enough 0.01 Multiples in Cash Register for Change');
      // console.log('Test ' + temp_Multiple);
      change_Return_Object.change.push(['PENNY', temp_Multiple * 0.01]);
      // console.log(change_Return_Object);

      change_Due = (change_Due - temp_Multiple * 0.01).toFixed(2);
      // console.log(
      //   'Not Enough 0.01 Dollar Bills In Cash Register Result and Update'
      // );
      // console.log(change_Return_Object);
      // console.log(change_Due);
    }
  }

  console.log('Final change_Return_Object');
  console.log(change_Return_Object);
  console.log(change_Due);
  if (change_Due != 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  return change_Return_Object;
}

// checkCashRegister(3.26, 100, [
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
should return 

{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20],
["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
 */

checkCashRegister(19.5, 20, [
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

 should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

 */

module.exports = checkCashRegister;
