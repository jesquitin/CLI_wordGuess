var Letter = function(character){
    //Stores the underlying character for the letter
    this.character = character.toUpperCase();
    //Stores a boolean value whether the letter has been guessed yet
    this.correctLetter = false;
    //A function that returns the underlying character if the letter has been guessed
    //or a placeholder(underscore) if the letter has not been guessed
    this.showCharacter = function (){
        if (this.correctLetter) {
            console.log(this.character);
        }else {
            console.log("_");
        }
    };
};

//test
//var Letter1 = new Letter("j");
//Letter1.showCharacter();

//export to use in the word.js file
module.exports = Letter;