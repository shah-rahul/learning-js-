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
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = noToChoice(randToRpsInteger());
  console.log('computer choice', botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);
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
