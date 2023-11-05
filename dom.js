const randomNumber = [];
for (i = 0; i < 5; i++) {
    randomNumber.push(Math.floor(Math.random()*10));
  }
console.log(randomNumber);

function verifyNumber(){
  let guessNumber = document.getElementsByTagName("form");
  console.log(guessNumber)
}