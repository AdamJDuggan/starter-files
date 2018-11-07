alert("Welcome to the game");
function getRandomNumber(upper){
  var randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}
console.log(getRandomNumber(6));


function calculateArea( width, length ) {
  if (isNAN(width) || isNAN(length)){
    throw new Error("Both arguments must be numbers");
  }
  return width * length;
}
calculateArea( 5, 4 ); // 20
calculateArea( 30, 4 ); // 120
