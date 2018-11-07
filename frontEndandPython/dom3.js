function say(something){
  console.log(something);
}

/*accepts 2 arguemnts; func being a function and arg being
arguemnt*/
function exec(func, arg){
  func(arg);
}

/*say being a function and the string being an argument*/
exec(say, "Hi there");


/*whole function written into another
transformed from statement to expression*/
exec(function say(something){
  console.log(something);
}, "Hi there you");


/*ananamos function*/
exec((something) => {
  console.log(something);
}, "Greetings everyone");


/*Delays console log by 3 seconds*/
window.setTimeout((something) => {
  console.log(something);
}, 3000, "Greetings everyone");


/*How to traverse up the dom*/
let paragraph = document.getElementById('myParagraph');
/*Var contains the parent of paragraph*/
let parent = paragraph.parentNode;
parent.removeChild(paragraph);
