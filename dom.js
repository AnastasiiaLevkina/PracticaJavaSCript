let randomNumber = "";
for (i = 0; i < 5; i++) {
  randomNumber += (Math.floor(Math.random()*10)).toString();
}

let correct;
let almostCorrect;
let guessed;

function coincidences(guessed, guessNum, randomNum){
  let randomNum2 = randomNum;
  for (k=0; k<2; k++){
     for (i=0; i<5; i++){
       for (j = 0; j<5; j++){
         if (guessNum[i]==randomNum2[j] && j==i ) {
          guessed[i] = 2;
          randomNum2 = randomNum2.replace(randomNum2[i], 'a');
        }
         else if (randomNum2.includes(guessNum[i])) guessed[i] = 1;
         else if (guessed[i]<2) guessed[i] = 0;
        }
     }
  }
  return guessed
}

function verifyNumber(){
  let goodNumber = true;
  let guessNumber = document.getElementsByName("guess")[0].value;


  let errorMessage = document.getElementsByClassName("error");
  
  if (!Number.isInteger(Number(guessNumber))){
    errorMessage[0].innerHTML = "Esto no es un número!";
  }

  else if (guessNumber>99999){
      errorMessage[0].innerHTML = "Este es un número demasiado grande!";
  }

  else if (guessNumber != randomNumber) {
    // Error message
    errorMessage[0].innerHTML = "Número erróneo, intenta otra vez!";
    guessNumber = guessNumber.toString();

    // Remove null values
    for (k = 0; k<5; k++){
      if (guessNumber[k] == undefined){
        guessNumber = "0" + guessNumber
      }
    }

    // Look for coincidences
    guessed = coincidences([0, 0, 0, 0, 0], guessNumber, randomNumber);

    // Create element
    let wasted = document.getElementById("tries");
    let wrongNumber = document.createElement("div");
    wrongNumber.classList.add("container");

    // Make children
    for (i=0; i<5; i++){
      let figure = document.createElement("div");
      figure.classList.add("numberSquare");

      // Assign color
      switch(guessed[i]){
        case 2:
          figure.setAttribute("name", "greenSquare");
          break;
        case 1:
          figure.setAttribute("name", "yellowSquare");
          break;
        default:
          figure.setAttribute("name", "greySquare");
      }
      figure.innerHTML = guessNumber[i];
      wrongNumber.appendChild(figure);
    }
    wasted.appendChild(wrongNumber);
    }

  else {
    errorMessage[0].innerHTML = "Has adivinado el número!";
    let secretNumber = document.getElementById("random");
    let secretFigure = secretNumber.getElementsByClassName("numberSquare");
    for (i = 0; i<5; i++){
      secretFigure[i].innerHTML = randomNumber[i];
      }
  }
}
