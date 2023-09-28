'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
const btn = document.createElement('button');
btn.innerHTML = 'submit';
document.body.append(btn);

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  //Split the given data into an array by new line(\n)
  const testData = text.split('\n');

  //destructured testData into key and value pair
  for (const [key, value] of testData.entries()) {
    //converting the whole content into lowercase
    //splitted the whole variable using underscore
    /*we can also do 
    const [first, second] = value.toLowerCase().trim().split('_');  */

    const splitData = value.toLowerCase().trim().split('_');

    //after the whole variable has been splitted
    //used slice to get the first letter after the underscore
    //and convert it to uppercase
    const finalData =
      splitData[0] +
      splitData[1].slice(0, 1).toUpperCase() +
      splitData[1].slice(1);

    //PAD- made sure the length of just the variable is 20
    //Cos of alignment
    //used the Key pair to get the index of the value we're
    //working on, so that we can use the repeat keyword to
    //repeat the CHECK-MARK * the KEY
    const outPut = `${finalData.padEnd(20)}${'✅'.repeat(key + 1)}`;
    console.log(outPut);
  }
});
