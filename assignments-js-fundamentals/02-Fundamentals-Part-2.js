console.log("LECTURE: Functions - Part 2");
/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/
const population = 7900;

function describeCountry (country, population, capitalCity ) {
  console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const Norway = describeCountry("Norway", 12, "Oslo");
const Finland = describeCountry("Finland", 6, "Helsinki");
const Denmark = describeCountry("Denmark", 5, "Copenhagen");

console.log("--------");
console.log("--------");


console.log("LECTURE: Function Declarations vs. Expressions - Part 2");
/*
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

function percentageOfWorld1(countryPopulation, country){
  const populationPercentage = countryPopulation / population  *100;
  console.log(`${country}'s population is ${populationPercentage} % of the world's population`);
}

const percentageOfWorld2 = function (countryPopulation, country){
  const populationPercentage = countryPopulation / population  *100;
  console.log(`${country}'s population is ${populationPercentage} % of the world's population`);
}

const populationChina = percentageOfWorld1(1441, "China");
const populationGeorgia = percentageOfWorld2(3, "Georgia");

console.log("--------");
console.log("--------");


console.log("LECTURE: Arrow Functions - Part 2");
/*
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

const percentageOfWorld3 = (countryPopulation, country) => {
  const populationPercentage = countryPopulation / population  *100;
  console.log(`${country}'s population is ${populationPercentage} % of the world's population`);
}
const populationUSA = percentageOfWorld3(350, "USA");

console.log("--------");
console.log("--------");



console.log("LECTURE: Functions Calling Other Functions - Part 2");
/*
1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier 
3. Call 'describePopulation' with data for 3 countries of your choice
*/

const percentage = function (countryPopulation)  {
  return countryPopulation / population *100;
}

const describePopulation = function (countryPopulation, country) {
  const countryPercentage = percentage(countryPopulation);
  console.log(`${country} has population of ${countryPopulation} million which is ${countryPercentage} % of the world's population`);
}

const populationIndia = describePopulation(1550, "India");
const populationGermany = describePopulation(65, "Germany");


console.log("--------");
console.log("--------");


console.log("LECTURE: Introduction to Arrays - Part 2");
/*
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

const populations = [1550, 1441, 50, 3];

console.log(populations);
console.log(`Array has 4 elements ? - ${populations.length === 4}`);

const percentages = [
  percentage(populations[0]), 
  percentage(populations[1]), 
  percentage(populations[2]), 
  percentage(populations[3])
];
console.log(percentages);

console.log("--------");
console.log("--------");