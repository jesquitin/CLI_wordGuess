var Letter = function(character){
    //Stores stores letter and convers to uppercase
    this.character = character.toUpperCase();
    //Stores a boolean value whether the letter has been guessed yet
    this.correctLetter = false;
    //checks if letter is correct
    this.showCharacter = function (){
        if (this.correctLetter) {
            //console.log(this.character);
        }else {
            //console.log("_");
        }
    };
};

//test
//var Letter1 = new Letter("j");
//Letter1.showCharacter();

//export to use in the word.js file
module.exports = Letter;