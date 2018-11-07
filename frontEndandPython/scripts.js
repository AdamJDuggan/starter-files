var html = '';
for ( var i = 1; i <= 100; i += 1;){
  html += '<div>' + i + '</div>';
}
document.write (html);



function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
randomNumber(6);


var counter = 0;
while(counter < 10){
  var randNum = randomNumber(6);
  document.write(randNum + '');
  counter +=1;
}

// Get a computer to guess a number between 1 and 10000
// and say how many times it took to guess it
var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guess !== randomNumber){
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write("<p> The random number was: " + randomNumber + "</p>");
document.write("<p> It took the computer " + attempts + "to get it right </p>");


// user number guessing game
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
// called a flag to determine the state of a condition
var correctGuess = false;
function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?")
  guessCount +=1;
  if (parseInt(guess)) === randomNumber){
    correctGuess = true;
  }
} while (! correctGuess)
  document.write("<h1>it took you "
  + guessCount + " times to get the right number");


// FOR LOOPS
// Here is comparisson between while and for
var counter = 0;
while (couter < 10){
  document.write(counter);
  counter += 1;
}

for (var counter = 0; counter < 10; counter +=1){
  document.write(counter);
}

// it is very common to use as single letter as
// a variable name with for loops. Esp i and j.
for (var i = 0; i < 10; i +=1){
  document.write(i);
}
