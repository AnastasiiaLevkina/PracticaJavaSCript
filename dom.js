const randomNumber = [];
for (i = 0; i < 5; i++) {
    randomNumber.push(Math.floor(Math.random()*10));
  }
console.log(randomNumber);

function verifyNumber(){
  let goodNumber = true;
  let guessNumber = document.getElementsByName("guess")[0].value;
  console.log(guessNumber);
  for (j = 10; j < 10000; j*10){
    console.log(j);
  }
}