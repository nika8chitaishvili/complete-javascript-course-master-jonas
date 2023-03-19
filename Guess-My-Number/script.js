"use strict";

// INTRODUCE  STARTING VARIABLES & FUNCTIONS
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};
let displayNumber = function (number) {
	document.querySelector(".number").textContent = number;
};
let displayGuess = function (guess) {
	document.querySelector(".guess").value = guess;
};

// DECLARE RANDOM NUMBER AT START
let randNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`First Random Number: ${randNumber}`);

// FUNCTION - GENERATE NEW RANDOM NUMBER
let reset = function () {
	randNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	document.querySelector(".score").textContent = score;
	document.querySelector(".message").textContent = "Make a # guess....";
	document.querySelector(".message").style.color = "#eee";
	document.querySelector(".guess").value = "##";
	console.log(`New Random Number: ${randNumber}`);
	document.querySelector(".number").style.backgroundColor = "white";
	document.querySelector(".number").textContent = "##";
};

// FUNCTION  - CHECK INPUT NUMBER
const check = function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(`Guessed Number: ${guess}`);

	// When Check is clicked without input
	if (!guess) {
		displayMessage("No Number!");
	} else if (guess === randNumber) {
		// When guess is correct
		displayMessage("Correct !");
		displayNumber(guess);
		document.querySelector(".number").style.backgroundColor = "#60b347";
		displayGuess("##");
		document.querySelector(".message").style.color = "#60b347";
		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}
		console.log(`Correct Number: ${guess}`);

		// When guess above the number
	} else if (guess !== randNumber) {
		if (score > 1) {
			displayMessage(guess > score ? "Guess is Higher..." : "Guess is Lower...");
			displayNumber(guess);
			displayGuess("##");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			// When score reaches 0
			displayMessage("You LOST...");
			document.querySelector(".number").style.backgroundColor = "#FF1122";
			displayGuess("##");
			document.querySelector(".message").style.color = "#FF1122";
			document.querySelector(".score").textContent = 0;
			displayNumber(guess);
		}
		// When guess is below the number
	}
};

// CLICK ON "GENERATE NEW" - GENERATES NEW RANDOM NUMBER
document.querySelector(".again").addEventListener("click", reset);

// CLICK ON "CHECK!"  - CHECKS <<GUESSED> NUMBER WITH <<GENERATED RANDOM NUMBER>>
document.querySelector(".check").addEventListener("click", check);
