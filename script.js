const mess = console.log(document.querySelector('.message').textContent);
/*document.querySelector('.message').textContent = ' Correct Number!';

document.querySelector('.guess').value = 13;
console.log((document.querySelector('.guess').value = 13));
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;
*/
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let Highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //document.querySelector('.message').textContent = '❌ No Number';
    displayMessage('❌ No Number');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '✔ Correct Number!';
    displayMessage('✔ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > Highscore) {
      Highscore = score;
      document.querySelector('.highscore').textContent = Highscore;
    }
  } else if (guess !== secretNumber) {
    guess > secretNumber
      ? displayMessage('Too High!')
      : displayMessage('Too Low!');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥You lost the Game!';
      displayMessage('💥You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  } /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
