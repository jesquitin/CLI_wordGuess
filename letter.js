var Letter = function(letter){
    this.letter = letter.toLowerCase();
    this.underscore = "-";
    this.guess = false;
    this.getDisplayLetter = function(){
        if(this.guessed){
            return this.letter;
        }
        return this.underscore;
    };
    //checks the user guess
    this.checkGuess = function(guess){
        if (this.letter === guess){
            this.guessed = true;
        }else {
           //console.log("_");
        }
    };

};

//test the letter.js
//var Letter1 = new Letter ("j");
//Letter1.checkGuess();

module.exports = Letter;