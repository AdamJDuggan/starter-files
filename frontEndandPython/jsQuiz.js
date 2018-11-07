// var playList = [
//   'I Did It My Way',
//   'Respect',
//   'Imagine',
//   'Born to Run',
//   'Louie Louie',
//   'Maybellene'
// ];
//
// function print(message) {
//   document.write(message);
// }
//
// function printList(list){
//   var listHTML = "<ol>";
//   for(var i = 0; i < list.length; i += 1){
//     listHTML += list[i] + "</li>"
//   }
//   listHTML +='</ol>';
//   print(listHTML);
// }
//
// printlist(playList);
//
//
//
// Search the store
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while(true){
 search = prompt("Search for your product in store. Type 'list' to see all ou products or press 'quit' to exit");
 search = search.toLocaleLowerCase();
 if (search === "quit"){
  break;
} else if (search === 'list'){
  print(inStock.join(', '));
} else{
    if (inStock.indexOf(search) >-1){
     print('Yes we have ' + search + ' in the store');
  }  else{
     print(search + ' is not in stock');
  }
 }
}

//
// // 2D array print
// var playList = [
// ['I Did It My Way', 'Frank'],
// ['Respect', 'Aretha'],
// ['Imagine', 'Peter'],
// ['Born to Run', 'simon'],
// ['Louie Louie', 'louise'],
// ['Maybellene', 'cammy']
// ];
//
// function print(message) {
//   document.write(message);
// }
// function printSongs( songs ) {
//   var listHTML = '<ol>';
//   for ( var i = 0; i < songs.length; i += 1) {
//     listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }
// printSongs(playList);
//
//
//
// Q AND A GAME WITH ARRAYS

var questions = [
  ["1. Which Maria game can you throw your hat?", "Odyseey"],
  ["2. What is the name of Bowsers Daughter?", "Wendy"],
  ["3. Who is the Princess in Mario Galaxy?", "Rosalina"]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


function buildList(arr){
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i +=1){
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else{
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right." <br>
html += '<h2>You got these questions correct: </h2>';
html += buildList (correct);
html += '<h2>You got these questions wrong: </h2>';
html += buildList (wrong);
print(html);


CLASSES
var student = {
  name: "Mario",
  grades: [80, 85, 90, 95]
};
alert(person.name);
// change name property
person.name = "Luigi";
// add a new property
person.nation = "Italy";


function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var person = {
  name : 'Colin',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = "<p>Hello. My name is " + person.name + "</p>";
message += "<p>I live in the " + person.country + "</p>";
person.name = "Rainbow Dash"
message += "<p>I wish my name was " + person.name + "</p>";
person.age += 1;
message += "<p>My age is now " + person.age + "</p>";
message += "<p>I have" + person.skills.length + " skills</p>";
message += person.skills.join(', ') + '</p>';
print(message);


//Calling parts of an object
var student = {
  name: "Dave",
  grades: [80, 85, 90, 95]
};

//this loop would print out the property name and grades to the screen.
//'key' could be 'i' or a keyword or anything else
for (var x in student){
  console.log(x);
}

//this will access the full list of property and objects ie age: 35
for (x in person){
  console.log(x, ': ', person[x]);
}
