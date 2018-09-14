/*JavaScript Algorithms and Data Structures Projects 1: Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.*/ 

//I want to do this in one line using higher order functions! Split, LowerCase and expression to remove all non characters is easy.Then how to test the forward-backward in one line? Got there by doing the mentioned tests both sides of a truth test (==) jsut with the reverse test addeded to the 2nd side.

function palindrome(str) {
return str.toLowerCase().replace(/[\W_]/g, '') == str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
}




/*JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string. I could not work this one out on my own. Below is answer from FreeCodeCamp. I need to learn map.call
*/

function rot13(str) {
// Split str into a character array
return str.split('')
// Iterate over each character in the array
.map.call(str, function(char) {
  // Convert char to a character code
  x = char.charCodeAt(0);
  // Checks if character lies between A-Z
  if (x < 65 || x > 90) {
    return String.fromCharCode(x);  // Return un-converted character
  }
  //N = ASCII 78, if the character code is less than 78, shift forward 13 places
  else if (x < 78) {
    return String.fromCharCode(x + 13);
  }
  // Otherwise shift the character 13 places backward
  return String.fromCharCode(x - 13);
}).join('');  // Rejoin the array into a string
}

















