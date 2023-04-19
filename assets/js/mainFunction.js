
import * as constants from "./constants.js";
import { generateRandomNumber, nearestHigh, nearestLow, validInput, lowOrHighOrEqual, showOrHide,bestScore, setObjLocalStorage } from "./utils.js";
import { renderOutput, renderInput, renderMessages, renderWhatNumber, renderLost, renderLoading } from "./render.js";
//funzione per inizio nuovo gioco
const { userScoreRecord, betweenObj, userInput, infoNumber } = constants;
let randomNumber = generateRandomNumber();
export function play() {
  // controllo del numero utente, se errato da messaggio di errore, altrimenti continua con il codice
  if (validInput(userInput.value)) {
    const userInputValue = +userInput.value; //trasformo l'input in numero
    //FUNZIONI PER L'INPUT
    // modifica betweenObj
    betweenObj.min = nearestLow(userInputValue, randomNumber, betweenObj.min);
    betweenObj.max = nearestHigh(userInputValue, randomNumber, betweenObj.max);
    //controlla se il valore inserito è inferiore, uguale o minore di quello random
    const isEqual = lowOrHighOrEqual(userInputValue, randomNumber);
    // render dell'input
    setTimeout(()=>{
      renderInput(constants.infoNumber, betweenObj.min, betweenObj.max, constants.showInfo, isEqual, false, constants.checkBtn)
      // FUNZIONI PER L'OUTPUT
      // se corretto riporta tutti i valori compreso il random number al posto del '?' altrimenti modifica i dati dell'output e abbassa score e tentativi rimanenti
      if (userInputValue === randomNumber) {
        userScoreRecord.highScore = bestScore(userScoreRecord.score, userScoreRecord.highScore);
        renderWhatNumber(constants.whatNumber, randomNumber);
        renderOutput(constants.scoreValue, userScoreRecord.score, constants.attemptsLeft, userScoreRecord.attempts, constants.highestScore, userScoreRecord.highScore)
        // nasconde checkBtn e mostra playAgainBtn
        showOrHide(constants.checkBtn);
        showOrHide(constants.playAgainBtn);
        setObjLocalStorage('userScoreRecord', userScoreRecord);
      } else {
        userScoreRecord.score -= 10;
        userScoreRecord.attempts--;
          if ((userScoreRecord.score === 0)) {
          renderOutput(constants.scoreValue, userScoreRecord.score, constants.attemptsLeft, userScoreRecord.attempts, constants.highestScore, userScoreRecord.highScore)
          renderLost(constants.showInfo, 'The number was... ' + randomNumber);
          showOrHide(constants.checkBtn);
          showOrHide(constants.playAgainBtn);
          renderWhatNumber(constants.whatNumber, randomNumber);
        }
        
        renderOutput(constants.scoreValue, userScoreRecord.score, constants.attemptsLeft, userScoreRecord.attempts, constants.highestScore, userScoreRecord.highScore)
      }
    }, 500)
    renderLoading(constants.checkBtn, 'Loading...', constants.infoNumber)
  } else {
    renderMessages(infoNumber, 'Please enter a valid number between 0 and 99');
  }

}


export function initializeGame(firstTime) {
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
  // ripristino i valori iniziali degli oggetti
  userScoreRecord.score = 100;
  userScoreRecord.attempts = 10;
  betweenObj.min = 0;
  betweenObj.max = 99;
  let score = userScoreRecord.score;
  let attemptsLeft = userScoreRecord.attempts;
  let highestScore = userScoreRecord.highScore;
  let minNumber = betweenObj.min;
  let maxNumber = betweenObj.max;
  renderInput(constants.infoNumber, minNumber, maxNumber, constants.showInfo, 'Good Luck', false, constants.checkBtn)
  renderWhatNumber(constants.whatNumber, '?');
  renderOutput(constants.scoreValue, score, constants.attemptsLeft, attemptsLeft, constants.highestScore, highestScore);
  //fa il controllo se è il primo caricamento
  if (firstTime !== 'firstTime') {
    showOrHide(constants.playAgainBtn);
    showOrHide(constants.checkBtn);
  }
}
