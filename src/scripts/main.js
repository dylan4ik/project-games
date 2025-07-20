

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

function calculateTime() {
    const seconds = parseInt(document.getElementById('secondsInput').value);
    if (isNaN(seconds) || seconds < 0) {
        document.getElementById('result').innerText = 'Введіть коректне число';
        return;
    }

    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById('result').innerText = `${days} дн. ${hours}:${minutes.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("interactiveToggle");
  const menu = document.getElementById("interactiveMenu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
    toggle.classList.toggle("rotate");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".interactive-dropdown")) {
      menu.classList.add("hidden");
      toggle.classList.remove("rotate");
    }
  });
});

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    if (!dino.classList.contains("jump")) {
      dino.classList.add("jump");

      setTimeout(() => {
        dino.classList.remove("jump");
      }, 400);
    }
  }
});

// Проверка на столкновение
let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop > 110) {
    alert("Гру завершено!");
    cactus.style.animation = "none";
    cactus.style.display = "none";
  }
}, 10);

const ball = document.getElementById('ball');
const field = document.getElementById('field');

ball.onmousedown = function(event) {
    event.preventDefault();
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        let fieldRect = field.getBoundingClientRect();

        let newLeft = pageX - shiftX - fieldRect.left;
        let newTop = pageY - shiftY - fieldRect.top;

        // Ограничения внутри поля
        newLeft = Math.max(0, Math.min(newLeft, field.clientWidth - ball.clientWidth));
        newTop = Math.max(0, Math.min(newTop, field.clientHeight - ball.clientHeight));

        ball.style.left = newLeft + 'px';
        ball.style.top = newTop + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    };
};

ball.ondragstart = function() {
    return false;
};