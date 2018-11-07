// alert("Welcome to my website!");
function revealMessage(){
  document.getElementById('hiddenMessage').style.display = 'block';
}

function countDown(){
  var currentVal = document.getElementById('countDownButton');
  var newVal = 0;
  if (currentVal > 0){
    newVal = currentVal-1;
  }
  document.getElementById('countDownButton').innerHTML = newVal;
}
