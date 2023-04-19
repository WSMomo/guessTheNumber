import { checkBtn, playAgainBtn, userInput} from "./constants.js";
import { play, initializeGame } from './mainFunction.js'

//avvio
userInput.focus();
initializeGame('firstTime'); // inizializza la schermata di gioco


 checkBtn.addEventListener("click", () =>{
   playGame();
  })
  
  playAgainBtn.addEventListener("click", ()=>{
    playGameAgain();
 })

 userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && window.getComputedStyle(checkBtn).display === 'block') {
      playGame();
  } else if (event.key === 'Enter' && window.getComputedStyle(checkBtn).display === 'none') {
    playGameAgain();
  }
})

function playGame(){
  play();
  userInput.value = '';
  userInput.focus();
}

function playGameAgain(){
  initializeGame();
  userInput.value = '';
  userInput.focus();
}