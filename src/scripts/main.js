
document.getElementById('check-year-btn').onclick = function() {
    const year = document.getElementById('birth-year').value;
    const result = document.getElementById('birth-result');
    if (!year) {
        result.textContent = 'Введіть рік!';
        result.style.color = 'red';
        return;
    }
    if (year >= 2000) {
        result.textContent = 'Ви народилися у високосний рік!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Ви народилися у звичайний рік!';
        result.style.color = 'green';
    }
};


let secretNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById('guess-btn').onclick = function() {
    const guess = Number(document.getElementById('guess-number').value);
    const result = document.getElementById('guess-result');
    if (!guess) {
        result.textContent = 'Введіть число!';
        result.style.color = 'red';
        return;
    }
    if (guess === secretNumber) {
        result.textContent = 'Вітаю, ви вгадали число! (number)';
        result.style.color = 'green';
        secretNumber = Math.floor(Math.random() * 100) + 1;
    } else if (guess < secretNumber) {
        result.textContent = 'Спробуйте більше!';
        result.style.color = 'orange';
    } else {
        result.textContent = 'Спробуйте менше!';
        result.style.color = 'orange';
    }
};


let userScore = 0;
let compScore = 0;
const choices = ['rock', 'scissors', 'paper'];
const icons = {
    rock: 'Камінь',
    scissors: 'Ножиці',
    paper: 'Папір'
};

document.querySelectorAll('.rps-btn').forEach(btn => {
    btn.onclick = function() {
        playRPS(btn.dataset.choice);
    };
});

document.getElementById('rps-computer-btn').onclick = function() {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById('rps-result').textContent = `Варіант комп'ютера: ${icons[compChoice]}`;
    document.getElementById('rps-result').style.color = '#2196f3';
};

function playRPS(userChoice) {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    if (userChoice === compChoice) {
        result = 'Нічия!';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'scissors' && compChoice === 'paper') ||
        (userChoice === 'paper' && compChoice === 'rock')
    ) {
        result = 'Ви виграли раунд!';
        userScore++;
    } else {
        result = 'Комп\'ютер виграв раунд!';
        compScore++;
    }
    document.getElementById('score-user').textContent = userScore;
    document.getElementById('score-comp').textContent = compScore;
    document.getElementById('rps-result').textContent = result;
    document.getElementById('rps-result').style.color = result.includes('виграли') ? 'green' : (result === 'Нічия!' ? '#888' : 'red');
}
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});
