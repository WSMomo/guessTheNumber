// OUTPUT
// render di tutto l'output
export function renderOutput(scoreHtMl, score, attemptHtml, attempts, highestScoreHtml, highestScore, ) {
  renderScore(scoreHtMl, score);
  renderAttemptsLeft(attemptHtml, attempts);
  renderHighestScore(highestScoreHtml, highestScore);
}

// render dello score
function renderScore(htmlElement, score) {
  htmlElement.innerText = score;
}
// render dell'highest score
function renderHighestScore(htmlElement, highScore) {
  htmlElement.innerText = highScore;
}

// render tentativi rimasti
function renderAttemptsLeft(htmlElement, attempts) {
  htmlElement.innerText = attempts;
}
// visualizza il numero da trovare in caso sia presente, 
// altrimenti visualizza '?'
export function renderWhatNumber(htmlElement, randomNumber) {
  if (typeof randomNumber === 'number') {
    console.log(typeof randomNumber)
    htmlElement.innerText = randomNumber;
  } else {
    console.log(typeof randomNumber)
    htmlElement.innerText = '?';
  }
}


// INPUT
// render di tutto l'input
export function renderInput(betweenHtml, minValue, maxValue, tipsHtml, EqualOrLowOrHigh, playAgain, confirmButtonHtml){
  renderTips(tipsHtml, EqualOrLowOrHigh);
  renderBetween(betweenHtml, minValue, maxValue);
  renderConfirmButton(confirmButtonHtml, playAgain);
}

// modifica between con i valori presenti in betweenObj(i numeri inseriti più vicini al numero da trovare)
function renderBetween(htmlElement, min, max) {
  htmlElement.innerHTML = `Between&nbsp;<span id="min-number">${min}</span>&nbsp;and&nbsp;<span id="max-number">${max}</span>&nbsp;`;
  htmlElement.style.backgroundColor = '#0b3142';
}

// visualizza il suggerimento 'high', 'low', 'win'
function renderTips(htmlElement, tip){
  htmlElement.innerText = tip;
}

// render checkBtn o PlayBtn
function renderConfirmButton(htmlElement, playAgain){
  if(playAgain){
    htmlElement.innerText = 'Play Again';
  } else{
    htmlElement.innerText = 'Check';
  }
}

// render messaggio errore
export function renderMessages(htmlElement, messages){
  htmlElement.innerText = messages;
  htmlElement.style.backgroundColor = '#8d1818';
  htmlElement.style.height = '45px';
  htmlElement.style.padding = '0 15px';
}

export function renderLost(htmlElement, lostMessage){
  htmlElement.innerText = lostMessage;
}

export function renderLoading(checkButton, loadingMessage, between){
  setTimeout(()=>{
    between.style.height = '30px';
    checkButton.style.backgroundColor = '#0b3142';
  }, 500)
  checkButton.innerText = loadingMessage;
  checkButton.style.backgroundColor = '#0f5257';
  between.innerHTML = `
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  `;
}