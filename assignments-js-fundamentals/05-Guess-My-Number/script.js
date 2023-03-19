"use strict";

// INTRODUCE  STARTING VARIABLES
let score = 20;
let highScore = 0;

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
		document.querySelector(".message").textContent = "No Number!";
	} else if (guess === randNumber) {
		// When guess is correct
		document.querySelector(".message").textContent = "Correct !";
		document.querySelector(".message").textContent = "Correct !";
		document.querySelector(".number").textContent = guess;
		document.querySelector(".number").style.backgroundColor = "#60b347";
		document.querySelector(".guess").value = "##";
		document.querySelector(".message").style.color = "#60b347";
		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}
		console.log(`Correct Number: ${guess}`);

		// When guess above the number
	} else if (guess > randNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "Guess is Higher...";
			document.querySelector(".number").textContent = guess;
			document.querySelector(".guess").value = "##";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			// When score reaches 0
			document.querySelector(".message").textContent = "You LOST...";
			document.querySelector(".score").textContent = 0;
			document.querySelector(".number").textContent = guess;
			document.querySelector(".guess").value = "##";
		}
		// When guess is below the number
	} else if (guess < randNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "Guess is Lower...";
			document.querySelector(".number").textContent = guess;
			document.querySelector(".guess").value = "##";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			// When score reaches 0
			document.querySelector(".message").textContent = "You LOST...";
			document.querySelector(".score").textContent = 0;
			document.querySelector(".number").textContent = guess;
			document.querySelector(".guess").value = "##";
		}
	}
};

// CLICK ON "GENERATE NEW" - GENERATES NEW RANDOM NUMBER
document.querySelector(".again").addEventListener("click", reset);

// CLICK ON "CHECK!"  - CHECKS <<GUESSED> NUMBER WITH <<GENERATED RANDOM NUMBER>>
document.querySelector(".check").addEventListener("click", check);
