console.log(">>>>>>> Developer Skills & Editor Setup - Part 3");
console.log("Coding Challenge #1 - Part 3");
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..." Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

console.log("OUTPUT:");

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
let data3 = [1111, 33, -232, 0, 41];

let printForecast = function (arr) {
  let string = " ";
  for (var i = 0; i < arr.length; i++) {
    string += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(`...${string}`);
};

console.log("DATA 1");
printForecast(data1);
console.log("DATA 2");
printForecast(data2);
console.log("DATA 3");
printForecast(data3);

// console.log(`... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ...`);
console.log("--------");
