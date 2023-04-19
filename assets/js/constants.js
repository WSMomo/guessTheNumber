import { getObjLocalStorage } from "./utils.js";
export const userInput = document.querySelector('#input-number');
export const checkBtn = document.querySelector('#check-btn');
export const playAgainBtn = document.querySelector('#play-again'); //button inizialmente nascosto che appare al termine della partita
export const infoNumber = document.querySelector('#info-number'); // indica eventuali errori e mostra i numeri tra i quali è compreso il randomNumber
export const showInfo = document.querySelector('#show-info'); // zona numero che mostra info varie(low, high, win, lose...)
export const whatNumber = document.querySelector('#what-number');
export const scoreValue = document.querySelector('#score-value');
export const attemptsLeft = document.querySelector('#attempts-left');
export const highestScore = document.querySelector('#highest-score-value');
export const minNumber = document.querySelector('#min-number');
export const maxNumber = document.querySelector('max-number'); 
// crea oggetto per salvare il punteggio
export const userScoreRecord = getObjLocalStorage('userScoreRecord') || {
  score: 100,
  attempts: 10,
  highScore: 0
}
// crea oggetto per registrare i numeri più vicini già inseriti dall'utente per poi fare il render nel campo
export const betweenObj = {
  min: 0,
    max: 99
}