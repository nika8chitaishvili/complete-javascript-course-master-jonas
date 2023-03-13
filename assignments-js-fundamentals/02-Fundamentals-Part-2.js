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

const percentageOfWorld1 = function (countryPopulation, country){
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


console.log("LECTURE: Basic Array Operations (Methods) - Part 2");
/*
1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neoghboursGeorgia = ["Armenia", "Azerbaijan", "Turkey","Russia"];
console.log(neoghboursGeorgia);
neoghboursGeorgia.push("Utopia");
console.log(neoghboursGeorgia);
neoghboursGeorgia.pop();
console.log(neoghboursGeorgia);
if(!neoghboursGeorgia.includes('Germany')){
  console.log("Probably not a central European country :D'")
}

// Replace value via item's index
neoghboursGeorgia.splice(3, 3, 'Switzerland');
console.log(neoghboursGeorgia);

// Replace value  via item's name
neoghboursGeorgia[neoghboursGeorgia.indexOf("Turkey")] = "Norway";
console.log(neoghboursGeorgia);

console.log("--------");
console.log("--------");


console.log("LECTURE: Introduction to Objects - Part 2");
/*
1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
*/

let myCountry = {
  country: "Georgia",
  capital: "Tbilisi",
  language: "Georgian",
  population: 4,
  neighbours: ["Armenia", "Azerbaijan", "Turkey","Russia"]
}

console.log(myCountry);

console.log("--------");
console.log("--------");

console.log("LECTURE: Introduction to Objects - Part 2");
/*
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
*/

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

console.log("--------");
console.log("--------");


console.log("LECTURE: Object Methods - Part 2");
/*
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

const myCountry2 = {

  country: "Japan",
  capital: "Tokyo",
  language: "Japanese",
  population: 150,
  neighbours: ["Korea", "Russia", "China","Phillipines"],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  }
}

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

console.log("--------");
console.log("--------");


console.log("LECTURE: Iteration: The for Loop - Part 2");
/*
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for (let  voter = 0; voter <= 10; voter++){
  console.log(`Voter number ${voter} is currently voting`);
}

console.log("--------");
console.log("--------");


console.log("LECTURE: Looping Arrays, Breaking and Continuing - Part 2");
/*
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
*/

const populations2 = [1550, 1441, 50, 3];
const percentages2 = [];

const percentageOfWorld = function (countryPopulation){
  const populationPercentage = countryPopulation / population  *100;
  return populationPercentage;
}

for (let  i = 0; i < populations2.length; i++){
  percentages2.push(percentageOfWorld(populations2[i]))
}

console.log(percentages2);

console.log("--------");
console.log("--------");


console.log("LECTURE: Looping Backwards and Loops in Loops - Part 2");
/*
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway
*/

const listOfNeighbours = [
  ['Canada', 'Mexico'], 
  ['Spain'], 
  ['Norway', 'Sweden', 'Russia']
];

for (let neighbourArray = 0; neighbourArray<listOfNeighbours.length; neighbourArray++){
  for (let neighbour = 0; neighbour<listOfNeighbours[neighbourArray].length; neighbour++){
    console.log(`Neighbour: ${listOfNeighbours[neighbourArray][neighbour]}`);
  }
}

console.log("--------");
console.log("--------");



console.log("LECTURE: The while Loop - Part 2");
/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the whileloop?
*/

const populations4 = [1550, 1441, 50, 3];
const percentages4 = [];

let pupultionIndex = 0;
while (pupultionIndex < populations4.length) {
  percentages4.push(percentageOfWorld(populations4[pupultionIndex]))
  pupultionIndex++;
}

console.log(`Population4 Percenteges: ${percentages4}`);

console.log("--------");
console.log("--------");






