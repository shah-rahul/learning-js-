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
};
const YOU = bjGame['you'];
const DEALER = bjGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#bjhit').addEventListener('click', bjHit);
document.querySelector('#bjdeal').addEventListener('click', bjDeal);

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return bjGame['cards'][randomIndex];
}
function bjHit() {
  let card = randomCard();
  console.log(card);
  showCard(card,YOU);
}

function showCard(card,activeplayer) {
  let cardImage = document.createElement('img');
  cardImage.src = `static/images/${card}.png`;
  document.querySelector(activeplayer['div']).appendChild(cardImage);
  hitSound.play();
}

function bjDeal() {
  let yourImages = document.querySelector('.your-box').querySelectorAll('img');
  for (i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  let dealerImages = document
    .querySelector('.dealer-box')
    .querySelectorAll('img');
  for (i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
}

