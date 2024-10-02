'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😘 Corect Score!! 🎉';
document.querySelector('.score').textContent = '10';
document.querySelector('.number').textContent = '13';

document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no input
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  if (!guess) {
    // document.querySelector('.message').textContent = '🚨🚨 No Number !!';
    displayMessage(' 🚨🚨 No Number !!');
  }

  //when guess is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '😘 Corect Score!! 🎉';
    displayMessage('😘 Corect Score!! 🎉');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? ' 📈 Too High ❕❕❕' : ' 📉 Too Low ❕❕❕';
      displayMessage(
        guess > secretNumber ? ' 📈 Too High ❕❕❕' : ' 📉 Too Low ❕❕❕'
      );
      document.querySelector('.message').style.color = 'red';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost 😪';
      displayMessage('You lost 😪');
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' 📈 Too High ❕❕❕';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost 😪';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //when guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ' 📉 Too Low ❕❕❕';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost 😪';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Button to restart the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});

