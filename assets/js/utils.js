export function generateRandomNumber(){
  return Math.floor(Math.random() * 100)
}

//funzione per settare il localStorage
export function setObjLocalStorage(key, value) {
  try{
    localStorage.setItem(key, JSON.stringify(value));
  } catch(error){
    console.error(`Impossibile salvare l'oggetto nel localStorage. ${error}`)
  }
}
//funzione per recuperare il localStorage
export function getObjLocalStorage(key) {
  try{
    return JSON.parse(localStorage.getItem(key));
  } catch(error){
    console.error(`Impossibile recuperare l'oggetto nel localStorage. ${error}`);
    return null;
  }
}

// funzione per mostrare o nascondere elementi HTML
export function showOrHide(htmlElement){
  if(htmlElement.style.display === 'none' || window.getComputedStyle(htmlElement).display === 'none'){
    htmlElement.style.display = 'block';
   } else {
    htmlElement.style.display = 'none';
   }
} 

// funzione per decretare se il numero è troppo alto, troppo basso o uguale
export function lowOrHighOrEqual(inputNumber, randomNumber){
  if(+inputNumber<randomNumber) {
    return 'Low';
  } else if(+inputNumber>randomNumber) {
    return 'High';
  } else if(+inputNumber === randomNumber){
    return 'Good Job!';
  }
}

// gestione errori da input
export function validInput(input){
  //controlla se il numero è : 
    // vuoto
    // non un numero
    // minore di 0 o maggiore di 99
  // e restituisce un booleano
  if(input === '' || isNaN(+input) || +input < 0 || +input > 99){
    return false;
  } else {
    return true;
  }
}


//salva  il numero inserito dall'utente se inferiore e più vicino del precedente al numero da indovinare
export function nearestLow(userNumber, randomNumber, objMin){
  if(userNumber < randomNumber && userNumber > objMin){
    return userNumber;
  }
  return objMin;
}

//salva  il numero inserito dall'utente se superiore e più vicino del precedente al numero da indovinare
export function nearestHigh(userNumber, randomNumber, objMax){
  console.log(`randomNumber: ${randomNumber}`)
  if(userNumber > randomNumber && userNumber < objMax){
    return userNumber;
  }
  return objMax;
}

// funzione per salvare il punteggio massimo se più alto del punteggio attuale
export function bestScore(score, highScore) {
  if (score > highScore) {
    highScore = score;
  }
  return highScore;
}