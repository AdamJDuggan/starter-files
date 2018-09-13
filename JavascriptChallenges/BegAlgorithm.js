/*
Basic Algorithm Scripting 1: Convert Celsius to Fahrenheit
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.*/

function convertToF(celsius) {
  return celsius * 9/5 +32;
}

/*
Basic Algorithm Scripting 2: Reverse a String
Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.
*/

function reverseString(str) {
  return str.split('').reverse().join('');
}

/*
Basic Algorithm Scripting 3: Factorialize a Number
Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/
function factorialize(num) {
  if (num < 0) return -1;
  else if(num == 0) return 1;  
  else return (num * factorialize(num - 1));
  }

/*
Basic Algorithm Scripting 3: Find the Longest Word in a String
Return the length of the longest word in the provided sentence. Your response should be a number.
*/
function findLongestWordLength(s) {
  return s.split(' ').reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0); //0 will be the value of x which math.max checks through against y.length
}

/*
Basic Algorithm Scripting 4: Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
    //map all items in full array to a new array
    return arr.map(function(group){
        //then return this array as the final result within each inner array using reduce
        return group.reduce(function(prev, current) {
        //the callback function passed to reduce takes a previous value and current value and compares the two. If the current value is more than the previous then we set it as the new previous value for comparrison with the next item with the array or returns if last item
        return (current > prev) ? current : prev;
        });
    });
}


/*
Basic Algorithm Scripting: Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

//substr returns the characters and by deafult starts at END of string.
//So here we say return str from the end and counting the size of target and is it equal to target it will return true or false.
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}


/*
Basic Algorithm Scripting: Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  if(num >= 1){return str.repeat(num)}
  else{return ''};
}


/*
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
    return arr.filter(func)[0];
}



/*
Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.
*/
function booWho(bool) {
    return typeof bool == "boolean";
}
booWho(null);

/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/

//turn all lowercase then find all non-whitespace characters (\s) at beggining of string (^) or after white space character (\s) and turn to uppercase
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

/*
Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.
*/ 
function bouncer(arr) {
  return arr.filter(Boolean);
}
/*
Basic Algorithm Scripting: Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
*/
function getIndexToIns(arr, num) {
  return arr.concat(num)
  .sort((a,b) => a-b).indexOf(num);
}

/*
Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
*/
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}