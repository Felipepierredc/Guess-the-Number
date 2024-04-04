const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTitle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btn-restart');
/*const numberDraw = Math.round(Math.random() * 10);*/

const GuessNumber = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function() {
        return Math.round(Math.random() * this.max);
    },

    showButtonRestart: function () {
        btnRestart.style.display = 'flex';
    },

    clearInput: function(){
        inputValue.value = '';
    },

    updateAttempt: function(value){
        attempt.innerHTML = value;
    },

    correctAnswer: function(){
        this.showButtonRestart();

        statusTitle.innerHTML = 'Parabéns, você acertou!';
        statusTitle.classList.remove('incorrect-answer');
        statusTitle.classList.add('status-correct');

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answer');

        this.clearInput();
    },

    incorrectAnswer: function(message){
        statusTitle.innerHTML = message;
        statusTitle.classList.add('incorrect-answer');

        this.clearInput();
    }

};

const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e) {
    e.preventDefault();

    const kick = inputValue.value;

        if (!kick) {
            alert("Digite algum Valor");
            return;
        }

        GuessNumber.updateAttempt(++GuessNumber.attemptsNumber);

        if (numberDraw == kick) {
            GuessNumber.correctAnswer();
        } else if (numberDraw > kick) {
            GuessNumber.incorrectAnswer('O Número é maior!');
        } else if (numberDraw < kick) {
            GuessNumber.incorrectAnswer('O Número é menor!');
}

};

function restartGame(){
    document.location.reload(true);
}