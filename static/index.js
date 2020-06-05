// challenge 1: your age in days
function ageInDays() {
  var birthYear = prompt('what year you were born in');
  var ageInDayss = (2020 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var TextAnswer = document.createTextNode('youre' + ageInDayss + 'days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(TextAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
  document.getElementById('ageInDays').remove();
}

function generatepussy() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-pussy-gen');
  image.src = 'https://cdn2.thecatapi.com/images/1tj.jpg';
  div.appendChild(image);
}

// challenge 3 rock decideWinner siccros
function rps(yourChoice) {
  // console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = noToChoice(randToRpsInteger());
  // console.log('computer choice', botChoice);
  results = decideWinner(humanChoice, botChoice);
  // console.log(results);
  message = finalMessage(results);
  // console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInteger() {
  return Math.floor(Math.random() * 3);
}

function noToChoice(number) {
  return ['rock', 'paper', 'siccors'][number];
}

function decideWinner(yourChoice, botChoice) {
  var rpsDatabase = {
    rock: {siccors: 1, rock: 0.5, paper: 0},
    paper: {siccors: 0, paper: 0.5, rock: 1},
    siccors: {paper: 1, siccors: 0.5, rock: 0},
  };

  var yourScore = rpsDatabase[yourChoice][botChoice];
  var computerScore = rpsDatabase[botChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {message: 'you lost!', color: 'red'};
  } else if (yourScore === 0.5) {
    return {message: 'tied', color: 'yellow'};
  } else {
    return {message: 'won', color: 'green'};
  }
}
// part 3 javascript
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById('rock').src,
    paper: document.getElementById('paper').src,
    siccors: document.getElementById('siccors').src,
  };
  // remove all images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('siccors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML =
    "<img src= '" +
    imageDatabase[humanImageChoice] +
    " 'style = 'box-shadow: 10px 10px 170px 0px rgba(255,0,85,1); '>";
  botDiv.innerHTML =
    "<img src= '" +
    imageDatabase[botImageChoice] +
    "'style='box-shadow: 10px 10px 170px 0px rgba(0,217,255,1);'>";
  messageDiv.innerHTML =
    "<h1 style='color :" +
    finalMessage['color'] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage['message'] +
    '</h1>';

  document.getElementById('rpsid').appendChild(humanDiv);
  document.getElementById('rpsid').appendChild(messageDiv);
  document.getElementById('rpsid').appendChild(botDiv);
}
// challenge 4 changing colors of button

var allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}
// console.log(copyAllButtons);

function buttonColorChange(button) {
  if (button.value === 'red') {
    buttonsRed();
  } else if (button.value === 'green') {
    buttonGreen();
  } else if (button.value === 'reset') {
    reset();
  } else if (button.value === 'random') {
    rand();
  }
}

function buttonsRed() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-danger');
  }
}

function buttonGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-success');
  }
}
function reset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}

function rand() {
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[Math.floor(Math.random() * 4)]);
  }
}
// black jack project

let bjGame = {
  you: {scoreSpan: '#yourbj-result', div: '.your-box', score: 0},
  dealer: {scoreSpan: '#dealerbj-result', div: '.dealer-box', score: 0},
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
  cardsMap: {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};
const YOU = bjGame['you'];
const DEALER = bjGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');
const winSOund = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#bjhit').addEventListener('click', bjHit);
document.querySelector('#bjdeal').addEventListener('click', bjDeal);
document.querySelector('#bjstand').addEventListener('click', dealerLogic);

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return bjGame['cards'][randomIndex];
}
function bjHit() {
  if (bjGame['isStand'] === false) {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function showCard(card, activeplayer) {
  if (activeplayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activeplayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

function bjDeal() {
  if (bjGame['turnsOver'] === true) {
    bjGame['isStand'] = false;
    let yourImages = document
      .querySelector('.your-box')
      .querySelectorAll('img');
    for (i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    let dealerImages = document
      .querySelector('.dealer-box')
      .querySelectorAll('img');
    for (i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#yourbj-result').textContent = 0;
    document.querySelector('#dealerbj-result').textContent = 0;
    document.querySelector('#yourbj-result').style.color = 'white';
    document.querySelector('#dealerbj-result').style.color = 'white';
    document.querySelector('bjresult').textContent = 'lets play';
    document.querySelector('bjresult').style.color = 'black';
    bjGame['turnsOver'] = true;
  }
}

function updateScore(card, activeplayer) {
  if (card === 'A') {
    if (activeplayer['score'] + bjGame['cardsMap'][card][1] <= 21) {
      activeplayer['score'] += bjGame['cardsMap'][card][1];
    } else {
      activeplayer['score'] += bjGame['cardsMap'][card][0];
    }
  } else {
    activeplayer['score'] += bjGame['cardsMap'][card];
  }
}

function showScore(activeplayer) {
  if (activeplayer['score'] > 21) {
    document.querySelector(activeplayer['scoreSpan']).textContent = 'BUST';

    document.querySelector(activeplayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activeplayer['scoreSpan']).textContent =
      activeplayer['score'];
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  bjGame['isStand'] = true;
  

  while (DEALER['score'] < 16 && bjGame['isStand'] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000); 
  }

  bjGame['turnsOver'] = true;
  showResult(computeWInner());
}

// compute winner who won
function computeWInner() {
  let winner;
  if (YOU['score'] <= 21) {
    if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
      bjGame['wins']++;
      winner = YOU;
    } else if (YOU['score'] < DEALER['score']) {
      bjGame['losses']++;
      winner = DEALER;
    } else if (YOU['score'] === DEALER['score']) {
      bjGame['drews']++;
    }
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    bjGame['losses']++;
    winner = DEALER;
  } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
    bjGame['drews']++;
  }
  console.log(bjGame);
  return winner;
}

function showResult(winner) {
  if (bjGame['turnsOver'] === true) {
    let message, messageColor;
    if (winner === YOU) {
      document.querySelector('#wins').textContent = bjGame['wins'];
      message = 'you won!';
      messageColor = 'green';
      winSOund.play();
    } else if (winner === DEALER) {
      document.querySelector('#losses').textContent = bjGame['losses'];
      message = 'you lost!';
      messageColor = 'red';
      lossSound.play();
    } else {
      document.querySelector('#drews').textContent = bjGame['drews'];
      message = 'you drew';
      messageColor = 'black';
    }

    document.querySelector('#bjresult').textContent = message;
    document.querySelector('#bjresult').style.color = messageColor;
  }
}
