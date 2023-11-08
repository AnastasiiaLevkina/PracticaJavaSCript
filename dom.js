let randomNumber = "";
for (i = 0; i < 5; i++) {
  randomNumber += (Math.floor(Math.random()*10)).toString();
}

let correct;
let almostCorrect;
console.log(randomNumber);

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

    // Remove null
    for (k = 0; k<5; k++){
      if (guessNumber[k] == undefined){
        guessNumber = "0" + guessNumber
      }
    }

    let wasted = document.getElementById("tries");
    let wrongNumber = document.createElement("div");
    wrongNumber.classList.add("container");

    let guessed = [0, 0, 0, 0, 0];
    for (i=0; i<5; i++){
      let figure = document.createElement("div");
      figure.classList.add("numberSquare");
      // Search for coincidences
      correct = false;
      almostCorrect = false;
      for (j = 0; j<5; j++){
        if (guessNumber[i]==randomNumber[j] && j==i){
          correct = true;
          guessed[j] = 1;
        }
        else if (guessNumber[i]==randomNumber[j] && guessed[j]==0) almostCorrect = true;
      }

      // Assign color
      switch(true){
        case correct:
          figure.setAttribute("name", "greenSquare");
          break;
        case almostCorrect:
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