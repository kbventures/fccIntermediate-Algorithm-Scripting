// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sum-all-numbers-in-a-range/16083

function sumAll(arr) {

    let num1 = arr[0];
    let num2 =arr[1];
    let currentRange = 0; 
    let sumOfAllNumbersInRange= num1 + num2; 
    // console.log(`Number 1 = ${num1}, Number 2 = ${num2}`);
    if (num1 > num2){ 
        let difference = num1 - num2;
        for(let counter = 1; counter < difference; counter++){
           let currentRange = num2 + counter;
           sumOfAllNumbersInRange = sumOfAllNumbersInRange + currentRange;
        //    console.log(sumOfAllNumbersInRange);
        }
        return sumOfAllNumbersInRange;
    }
    let difference = num2 - num1;
        for(let counter = 1; counter < difference; counter++){
           let currentRange = num1 + counter;
           sumOfAllNumbersInRange = sumOfAllNumbersInRange + currentRange;
        //    console.log(sumOfAllNumbersInRange);
        }
        console.log(sumOfAllNumbersInRange);
    return sumOfAllNumbersInRange;
  }
  
  sumAll([4, 1]);
  sumAll([1, 4]);

  /*


Alternative Solution1:

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);



Alternative Solution2:

const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};



Alternative Solution3:

function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

Alternative Solution4:

function sumAll([ first, last ] ) {
 const step = first - last < 0 ? 1 : -1;
 return first !== last
   ? first + sumAll([ first + step, last ])
   : first;
}

  
  */