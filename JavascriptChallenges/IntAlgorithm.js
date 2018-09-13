/*
___________________________________________________________________________
Intermediate Algorithm Scripting 1: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first
___________________________________________________________________________
*/
function sumAll(arr) {
    // get the higher of the two
    var higest = Math.max(arr[0], arr[1]);
    // get the lower of the two
    var lowest = Math.min(arr[0], arr[1]);
    var hold = 0;
    // this will get the numbers between but
    // we may as well include the arr numbers themselves save adding them
    // later so start at lowest and include highest in loop
    for (var i=lowest; i <= higest; i++){
        hold += i;
    }
  return(hold);
  }
sumAll([2, 8]);


/*
___________________________________________________________________________
Intermediate Algorithm Scripting 2: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one
of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Note - You can return the array with its elements in any order.
_______________- ____________________________________________________________
*/
// This was really hard! Amazing it is summed up in such a few lines.
// Add (concat) the two arrays together. For each item (j) in the new long // array;filter out the ones which are not(!) included (includes) in both //arr1 and arr2.
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(
    j => !arr1.includes(j) || !arr2.includes(j)
    )
  }

/*
___________________________________________________________________________
Intermediate Algorithm Scripting 3: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. Note- You have to use the arguments object.
  _______________- ____________________________________________________________
*/

// I couldn't do this one as not come across'arguments' before!
// I now know that arguments object is an object that stores all of the values passed to the function.

function destroyer(arr) {
  // so this line of code makes a new array from (from()) the arguments
  // passed into the function
  var args = Array.from(arguments)
  // slice from the 2nd argument in args
  .slice(1);
  // return the filtered array. Includes() will check if val is NOT in args.
  return arr.filter(function(val) {
    // return true to keep value in original array or false to remove it
    return !args.includes(val);
  });
}

/*
___________________________________________________________________________
Intermediate Algorithm Scripting 5: Spinal Tap Case
Convert a string to spinal case. Spinal case is
all-lowercase-words-joined-by-dashes.
___________________________________________________________________________
*/

// So good to use the or (|) method to write this in one line!
// Split the string on one of each of the possible conditions;
// whitespace(\s), underscore([_]) or a letter followed by an
// uppercase letter [(?=[A-Z])]. Then join with a dash (-) and make it
// all lower case!
return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()


/*
___________________________________________________________________________
Intermediate Algorithm Scripting 6: Pig Latin
Translate the provided string to pig latin.
___________________________________________________________________________
*/

function translatePigLatin(str) {
  var answer = '';
  var regex = /[aeiou]/gi;

  // Check if first character a vowel
  if (str[0].match(regex)) {
    answer = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if only consonants
    answer = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    answer = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return answer;
}

// test here
translatePigLatin("consonant");


// Advanced solution. Icouldnt do it this way but will reherse...
function translatePigLatin(str) {
  return str
  // works only if the string begins with a vowel, in
  // that case it adds way at the end of the string.
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    // The second .replace() works only if the string begins with one or more
    // consonants, in that case it moves them at the end of the string and adds
    // ay at the end of it.
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}

// test here
translatePigLatin("consonant");


/*
___________________________________________________________________________
Intermediate Algorithm Scripting 6: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before).Third argument is what you will be replacing the second argument with (after).
___________________________________________________________________________
*/

// I nearly got there with this one! I knew I wanted to end with to a simple...
// return str.replace(before, after)
// ...as this is a clean line of code. But I needed some help to get the
// first letter case check and convert. I was surprissed that noone found a short way to do this. The 'advanced'answers were longer than this simple version!I am sure there will be a clean code way to do this is two lines using regex and latest Javascript methods?

function myReplace(str, before, after) {
  // Find where before is in str
  var index = str.indexOf(before);
  // Check if first letter is uppercase
  if (str[index] === str[index].toUpperCase()) {
    // if so make after[0] uppercase
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
    return str.replace(before, after);
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/*
___________________________________________________________________________
Intermediate Algorithm Scripting 6: DNA
The DNA strand is missing the pairing element. Take each character,
get its pair, and return the results as a 2d array.Base pairs are a
pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
___________________________________________________________________________
*/

// I knew this would need an empty array [] and then run a test via a switch function which pushed pairs to the newArr. Then run each item of str throguh the switch function.

function pairElement(str) {
  var newArr = [];
  var switchPush = function(j){
    switch(j){
      case 'A':
      newArr.push(['A', 'T']);
      break;
      case 'T':
      newArr.push(['T', 'A'])
      break;
      case 'G':
      newArr.push(['G', 'C'])
      break;
      case 'C':
      newArr.push(['C', 'G'])
      break;
    }
  };

// I really wanted to do this with a forEach arrow function but could not
// get it to work!
  for (var i = 0; i < str.length; i++) {
    switchPush(str[i]);
  }
  return newArr;
}

pairElement("GCG");



function fearNotLetter(str) {

  var newArr = [];
  for(var j = 0; j < str.length; j++){
    newArr.push(str(j).charCodeAt());
  }
  for(var k = 0; k < newArr.length; k++){
    if(newArr[k] !=   )
  }
}

       
fearNotLetter("abce");

'ABC'.charCodeAt(0); // returns 65

var sentence = 'The quick brown fox jumped over the lazy dog.';
var index = 4;
console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
// expected output: "The character code 113 is equal to q"



/*
I NEED TO REFRESH MY MAP, FILTER AND REDUCE!!
*/


/*
Notes on using the Map() method
Use it when: You want to translate values in an array into another set of values
*/
const dollars = [32, 45, 50];
const euros = dollars.map(eachAmount => eachAmount * .93);


/*
Notes on using the filter() method
Use it when: You want to remove unwanted values from an array.
Example: Remove any euro amounts lower than 30
*/
const euros = [29.76, 41.85, 46.5];
const above30 = euros.filter(euro => euro >= 30);
above30 // [ 41.85, 46.5]


// Simple use of reduce method()
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount);
sum // 118.11

// Create a tally with reduce()
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})
count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// Flatten an array...
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


/*
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final
array should not be sorted in numerical order.
*/

//I reallly tried to do a forEach on this but could not get it to work.
function uniteUnique(arr1, arr2, arr3) {
 //This is dead helpful. How to convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce to flatten the array
  var newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;
}

// Looking at the advanced solution I learnt about the set method.
// this is really polished...
function uniteUnique(arr) {
  //make an array out of arguments and flatten it (using the spread operator)
  const args = [].concat(...arguments);
  // create a Set object which only stores unique values
  return [...new Set(args)];
}
      
//Intermediate Algorithm Scripting: Steamroller
//Flatten a nested array. You must account for varying levels of nesting.
unction steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);


//Intermediate Algorithm Scripting: Binary Agents
//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.
function binaryAgent(str) {
  //split the string on the whitespaces. Map each entry and return the CharCode on that element with parseInt inside. 
  return str.split(" ").map(function(elem) {
    return String.fromCharCode(parseInt(elem, 2));
      //then join back togehter 
  }).join("")
}
//Or another example on Stack....     
function binarytoString(str) {
  return str.split(/\s/).map(function (val){
    return String.fromCharCode(parseInt(val, 2));
  }).join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
      


      