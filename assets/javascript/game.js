var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var Wins = 0;
var Losses = 0;
var Guesses = 10;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

document.onkeypress = function(event) {
	var userGuess = event.key;

	if (userGuess === computerChoice) {
		Wins++;
	}
	else {
		Guesses--;
	}
	if (Guesses == 0) {
		Losses++;
	}
	document.getElementById('Wins').innerHTML = "Wins: " + Wins;
	document.getElementById('Losses').innerHTML = "Losses: " + Losses;
	document.getElementById('Guesses').innerHTML = "Guesses left: " + Guesses;
}
