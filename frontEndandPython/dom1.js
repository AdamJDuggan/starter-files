// //here we select the element//
// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
// //start listening for brouser events//
// myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
// });

// will select the fist li element from the page
// document.querySelectorAll('li') selects all li from doc//
// document.querySelector('li')


//how to select a title
// document.querySelectorAll('[title = label]')

const myList = document.getElementsByTagName('li');
for (let i = 0; i < myList.length; i += 1){
  myList[i].style.color = 'purple';
}

// easiest way to get a class
const errorNotPurple = document.querySelectorAll('.error-not-purple');
for (let i = 0; i < myList.length; i += 1){
  errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li: nth-child(odd)');
for (let i = 0; i < evens.length; i += 1){
  evens[i].style.backgroundColor = 'lightgray';
}
