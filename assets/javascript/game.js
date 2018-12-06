
// Global Variables
//====================================================
// Create an array of words

var wordList = ['vader', 'jedi', 'yoda', 'kenobi', 'chewy', 'luke', 'leia', 'c3po'];

// Choose word randomly

var rightWord = [];
var wrongWord = [];
var chosenWord = [];
var underScore = [];
var counter = 10;

// Dom 
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementById("rightGuess");
var docWrongGuess = document.getElementsByClassName('wrongGuess');
//Main
//=======================================================

// Choose Random word
randomNum();

function randomNum() {
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

  createUnderScore();
}

// Create underscores based on the length of the word
function createUnderScore() {
  for (var i = 0; i < chosenWord.length; i++) {
    underScore.push("_");
    document.getElementById("rightGuess").innerHTML = underScore.join(" ");
  }
}
// Get users guess

document.addEventListener('keypress', (event) => {
  var keyword = String.fromCharCode(event.keyCode);
  // If users guess is right

  if (chosenWord.indexOf(keyword) > -1) {

    // add to right words array
    rightWord.push(keyword);

    // replace underscore with right letter
    underScore[chosenWord.indexOf(keyword)] = keyword;

    document.getElementById("rightGuess").innerHTML = underScore.join(" ");
  } counter--

  // Checks to see if user word matches guesses
  if (underScore.join('') == chosenWord) {
    alert("You Win");
    setTimeout(myFunction, 100)

    function myFunction() {
      var answer = confirm("You beat Hangman. Do you want to play again?");
      if (answer == true) {
        reset();
      }
    }
  }
  else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    if (wrongWord.length == 6) {

      setTimeout(myFunction, 100)
      function myFunction() {
        var answer = confirm("You Lose! Do you want to play again?");
        console.log(wrongWord);

        if (answer == true) {
          reset();
        }
      }
    }
  }
});

//Reset Game
function reset() {

  // Clear all arrays
  rightWord = [];
  wrongWord = [];
  chosenWord = [];
  underScore = [];

  // Clear Right Letters and Wrong Letters field


  document.getElementById("rightGuess").innerHTML = "";
  docWrongGuess[0].innerHTML = "";

  // Choose a random word

  randomNum();
}
