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
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/


console.log("OUTPUT:");

console.log(`DATA1: Mark's BMI : ${bmiMark1}`);
console.log(`DATA1: Jogn's BMI : ${bmiJohn1}`);
if (bmiMark1 > bmiJohn1){
  console.log(`DATA 1: Mark has a higher BMI than John`);
}else if (bmiMark1 == bmiJohn1){
  console.log(`DATA 1: Mark has same BMI as John`);
}else{
  console.log(`DATA 1: John's has a higher BMI than Mark`);
}
console.log("--------");



console.log("Coding Challenge #3");
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below 2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

console.log("OUTPUT:");
const dolphins = (96 + 108 + 89)/3;
const koalas = (88 +91 +110)/3;

const dolphinsBonus1 = (97 + 112 +101)/3;
const koalasBonus1 = (109 + 95 +123)/3;

const dolphinsBonus2 = (97 + 112 +101)/3;
const koalasBonus2 = (109 + 95 +106)/3;

console.log(`BONUS 1 - AVERAGES:  
Dolphins ${dolphinsBonus1}
Koalas ${koalasBonus1}`);


if (dolphinsBonus1 > koalasBonus1 && dolphinsBonus1 >= 100) {
  console.log(`BONUS 1 RESULT:  Winner - Dolphins with average ${dolphinsBonus1}`)
}else if(dolphinsBonus1 === koalasBonus1 && dolphinsBonus1 >= 100) {
  console.log(`BONUS  1 RESULT: Draw`)
}else if (dolphinsBonus1 < koalasBonus1 && koalasBonus1 >=100){
  console.log(`BONUS  1 RESULT:  Winner - Koalas with average ${koalasBonus1}`)
}else{
  console.log(`BONUS  1 - No Winners`)
}

console.log("--------");



console.log(`Coding Challenge #4`);

console.log("--------");
