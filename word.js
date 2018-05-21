// require in the letters constructor
console.log("is loaded");
var Letter = require("./Letter");

var Word = function(randWord){
    //random word and other arrays used in the game for letters in the work, underscores, 
    this.randWord = randWord;
    //empty array to be filled with the letters of the chosen word
    this.letters = [];
    //Array of the number of underscores of the chosen word
    this.underscore = [];
    //split the word to find out the number of letters in the random word
    this.splitWord = function(){
        this.letters = this.randWord.split("");
        underscoresNeeded = this.letters.length;
        //number of underscores in the underscore array and add a spce between the underscores
        console.log(this.underscore.join(" "));
    };
    this.lettersNeeded = function(){
        for ( var i = 0; i < this.letters.length; i++){
            this.letters[i] = new Letter (this.letters[i]);
            //runs the showCharacter funtion form letters.js place holder for underscores
            console.log(this.letters[i]);
            this.letters[i].showCharacter();
        }
    };
};

//test word.js ALL WORKING and hate the (.this)
//var aWord = new Word ("javascript");
//aWord.splitWord();
//aWord.lettersNeeded();

module.exports = Word;