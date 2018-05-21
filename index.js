var Word = require("./Word");

var inquirer = require("inquirer");

var isLetter = require("is-letter");

var wordList = ['houston', 'buda', 'texas', 'austin', 'developer', 'buda', 'georgetown', 'javascript', 'website', 'working'];

var randomWord;
var aWord;
//start game with 10 guesses
var numbGuesses = 10;

var userGuess = "";
var userGuessCorrect = false;

var lettersGuessed = "";
var lettersGuessedArray = [];

var display = 0;
//Start game function.
function startGame(){
	//Reset number of guesses 
	guessesRemaining = 10;
	//Pick a random word from word list.
	chooseRandomWord();
	//Empty out list of already guessed letters.
	lettersGuessed = "";
	lettersGuessedArray= [];
}
//Function to choose a random word from the list of cities in the word bank array.
function chooseRandomWord() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    //Set the random word chosen from the word list to aWord.
    aWord = new Word (randomWord);
    //Tell the user how many letters are in the word.
    console.log("Your word contains " + randomWord.length + " letters.");
    console.log("Word to guess: ");
    //Use the Word constructor in Word.js to split the word and generate letters.
    aWord.splitWord();
    guessLetter();
    //aWord.lettersNeeded();
    
    }
    //testing chooseRandom Function
    //chooseRandomWord();
     function guessLetter(){
        //Prompt user to enter a letter
        if (display < aWord.letters.length || guessesRemaining > 0) {
        inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter:",
        //verify the guess is a letter
        validate: function(value) {
            if(isLetter(value)){
              return true;
            } 
            else {
              return false;
            }
          }
      }
    ]).then(function(guess) {
        //letters to upper case
	guess.letter.toUpperCase();
	console.log("You guessed: " + guess.letter.toUpperCase());
	//Assume correct guess 
	userGuessedCorrectly = false;
	//check if letter has already been guessed
	if (lettersGuessedArray.indexOf(guess.letter.toUpperCase()) > -1) {
		//If user already guessed a letter, run inquirer again to prompt them to enter a different letter.
		console.log("You already guessed that letter. Enter another one.");
		console.log("=============================");
		guessLetter();
	}else if (lettersGuessedArray.indexOf(guess.letter.toUpperCase()) === -1) {
		//guessed letters.
		lettersGuessed = lettersGuessed .concat("" + guess.letter.toUpperCase());
		lettersGuessedArray.push(guess.letter.toUpperCase());
		//Log guessed letters.
		console.log("Letters already guessed: " + lettersGuessed );

		//check if letter matches word
		for (i=0; i < aWord.letters.length; i++) {
            //If the user guess equals one of the letters
            if (guess.letter.toUpperCase() === aWord.letters[i].character && aWord.letters[i].correctLetter === false) {
				//Set correctLetter property for that letter equal to true.
				aWord.letters[i].correctLetter === true;
				//Set userGuessedCorrectly to true.
				userGuessedCorrectly = true;
				aWord.underscores[i] = guess.letter.toUpperCase();
				//increment underscores
				display++;
			}
		}
		console.log("Word to guess: ");
		aWord.splitWord();
		aWord.lettersNeeded();
        	//If user guessed correctly...
		if (userGuessedCorrectly) {
			//correct guess 
			console.log("Correct letter");
			console.log("==============================");
			//check if user won or lost
			checkIfUserWon();
		}

		//Incorrect guess
		else {
			//Tell user they are incorrect
			console.log("Incorrect letter!");
			//Decrease number reamining guesses
			guessesRemaining--;
			console.log("You have " + guessesRemaining + " guesses left.");
			console.log("==================================");
			//check if game is over won or lost
			checkIfUserWon();
		}
	}
});
}
}
//testing game
//startGame();
function checkIfUserWon() {
	//If number of guesses remaining is 0, end game.
	if (guessesRemaining === 0) {
		console.log("=====================================================================");
		console.log('You lost. Better luck next time');
		console.log("The correct word was: " + randomWord);
		console.log("=====================================================================");
		//Ask user if they want to play again. Call playAgain function.
		playAgain();
	}
	else {
		//If user did not win or lose after a guess, keep running inquirer.
		guessLetter("");
	}

}
//Create a function that will ask user if they want to play again at the end of the game.
function playAgain() {
	var playGameAgain = [
	 {
	    type: 'confirm',
	    name: 'playAgain',
	    message: 'Do you want to play again?',
	    default: true
	  }
	];
	inquirer.prompt(playGameAgain).then(userWantsTo => {
		if (userWantsTo.playAgain){
			//Empty out arrays.
			lettersGuessed  = "";
			lettersGuessedArray = [];
			//Set display to zero.
			display = 0;
			console.log("Great! Let's play");
			//start a new game.
			startGame();
		}
		else {
			//If user doesn't want to play again, exit game.
			console.log("Hope you come back and play.");
			return;
		}
	});
}
startGame();