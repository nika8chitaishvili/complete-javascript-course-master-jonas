console.log("Coding Challenge #1");
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// DATA 1
const massMark1 = 78;
const massJohn1 = 92;
const heightMark1 = 1.69;
const heightJohn1 = 1.95;
// DATA 2
const massMark2 = 95;
const massJohn2 = 85;
const heightMark2 = 1.88;
const heightJohn2 = 1.76;
// BMI calculation
const bmiMark1 = massMark1 / (heightMark1 ** 2)
const bmiJohn1 = massJohn1 / (heightJohn1 ** 2)
const bmiMark2 = massMark2 / (heightMark2 ** 2)
const bmiJohn2 = massJohn2 / (heightJohn2 ** 2)
// BMI comparison
const markHigherBMI1 = bmiMark1> bmiJohn1;
const markHigherBMI2 = bmiMark2> bmiJohn2;

console.log("OUTPUT:");
console.log(`DATA 1: 
Mark's BMI: ${bmiMark1}
John's BMI: ${bmiJohn1}` );
console.log(`DATA 1: Mark has a higher BMI than John - ${markHigherBMI1}`);
console.log(`DATA 2: 
Mark's BMI: ${bmiMark2}
John's BMI: ${bmiJohn2}`);
console.log(`DATA 2: Mark has a higher BMI than John - ${markHigherBMI2}`);
console.log("--------");


console.log("Coding Challenge #2");
/*

*/


console.log("OUTPUT:");

console.log("--------");