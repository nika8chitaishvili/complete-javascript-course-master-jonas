console.log("Coding Challenge #1 - Part 2");
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

console.log("OUTPUT:");

const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

const checkWinner = function (dolphinsScore, koalasScore) {
  if(dolphinsScore >= 2*koalasScore) {
    console.log(`Result - Dolphins Win:
    Dolphins: ${dolphinsScore}
    Koalas: ${koalasScore}`);
  }else if (koalasScore >= 2*dolphinsScore){
    console.log(`Result - Koalas Win:
    Dolphins: ${dolphinsScore}
    Koalas: ${koalasScore}`);
  }else{
    console.log(`Result - No Winner:
    Dolphins: ${dolphinsScore}
    Koalas: ${koalasScore}`)
  }
}

// Data 1 Input
console.log("Data 1:")
let dolphinsScore = calcAverage(44, 23, 71); // 46
let koalasScore = calcAverage(65, 54, 49); // 56
checkWinner(dolphinsScore, koalasScore);

// Data 2 Input
console.log("Data 2:")
dolphinsScore = calcAverage(85, 54, 41); // 60
koalasScore = calcAverage(23, 34, 27); // 28
checkWinner(dolphinsScore, koalasScore);

console.log("--------");




