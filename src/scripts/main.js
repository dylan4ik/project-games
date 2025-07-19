

document.getElementById('check-year-btn').onclick = function() {
    const year = document.getElementById('birth-year').value;
    const result = document.getElementById('birth-result');
    
    if (year >= 2000) {
        result.textContent = 'Ви народилися у високосному році!';
    } else {
        result.textContent = 'Ви народилися у звичайному році!';
    }
};


let secretNumber = Math.floor(Math.random() * 10) + 1; 

document.getElementById('guess-btn').onclick = function() {
    const guess = Number(document.getElementById('guess-number').value);
    const result = document.getElementById('guess-result');
    
    if (guess === secretNumber) {
        result.textContent = 'Вітаю! Ви вгадали!';
        secretNumber = Math.floor(Math.random() * 10) + 1; 
    } else if (guess < secretNumber) {
        result.textContent = 'Більше!';
    } else {
        result.textContent = 'Менше!';
    }
};


document.getElementById('find-max-btn').onclick = function() {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    const n3 = Number(document.getElementById('num3').value);
    
    let max = n1;
    if (n2 > max) max = n2;
    if (n3 > max) max = n3;
    
    document.getElementById('max-result').textContent = 'Найбільше: ' + max;
};
let userScore = 0;
let compScore = 0;

document.querySelectorAll('.rps-btn').forEach(function(btn) {
    btn.onclick = function() {
        const userChoice = btn.dataset.choice; 
        const choices = ['rock', 'scissors', 'paper'];
        const compChoice = choices[Math.floor(Math.random() * 3)];
        
        let result = '';
        
      
        if (userChoice === compChoice) {
            result = 'Нічия!';
        } else if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'scissors' && compChoice === 'paper') ||
            (userChoice === 'paper' && compChoice === 'rock')
        ) {
            result = 'Ви виграли!';
            userScore++;
        } else {
            result = 'Комп\'ютер виграв!';
            compScore++;
        }
        
      
        document.getElementById('rps-result').textContent = 
            `Ви: ${userChoice}, Комп\'ютер: ${compChoice}. ${result}`;
        

        document.getElementById('score-user').textContent = userScore;
        document.getElementById('score-comp').textContent = compScore;
    };
});


const members = [
    { name: "Міша", info: "15 років", photo: "src/міша.jpg" },
    { name: "Руслан", info: "15 років", photo: "src/руслан.jpg" }
];

let current = 0;

document.getElementById('team-prev').onclick = function() {
    current = current - 1;
    if (current < 0) current = members.length - 1;
    showMember();
};

document.getElementById('team-next').onclick = function() {
    current = (current + 1) % members.length;
    showMember(current);
};
showMember(current);
