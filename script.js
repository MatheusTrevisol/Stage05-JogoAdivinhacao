const input = document.querySelector('input')
let randomNumber = Math.round(Math.random() * 10)

let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let screen2Span = document.querySelector('.screen2 span')
let attempts = 1

//Eventos
document.addEventListener('keydown', tryAgain);

//Funções
function tryButton(event) {
    event.preventDefault();
    
    if(Number(randomNumber) === Number(input.value)) {
        alert('Parabéns você acertou!')
        toggleScreen();
        screen2Span.innerText = attempts;
    } else if(input.value === '' || input.value > 10) {
        attempts = attempts
    } else {
        alert('Número Errado! Tente novamente!')
        attempts++
    }   
    
}

function playAgain() {
    toggleScreen();
    attempts = 1;
    input.value = '';
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

function tryAgain(e) {
    if(e.key === 'Enter' && screen1.classList.contains('hide')) {
        playAgain();
    }
}