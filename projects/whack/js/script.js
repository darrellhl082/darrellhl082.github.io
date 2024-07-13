// Variable declaration
const scriptURL =
    'https://script.google.com/macros/s/AKfycbx5DfbdGuAES5x1xu9nPzkWS6WfZ1VSaiYQ9Ug7IF2JmYaTZABtgsXkteWEJ5q3C3Il/exec'
const form = document.forms['gameScore']
const soils = document.querySelectorAll('.soil');
const moles = document.querySelectorAll('.mole');
const startClick = document.querySelector('.startClick');
const scoreBoard = document.querySelector('.score');
let score, lastSoil, end, playerName, timeSign, token, allMole;

let timer = document.querySelector('.timer')
// first condition
moles.forEach(m => {
    m.classList.add('d-none')
})
moles.forEach(m => {
    m.addEventListener('click', whack)
})
// start page event
$('.startPageBtn').click(function (e) {
    e.preventDefault();
    playerName = $('.startName').val();

    if (playerName === '') {

        $('.alert-box').removeClass('d-none');
    } else {
        $('.startPage').addClass('d-none');
    }
    $('.welcome').html(`${playerName}, Welcome to The Game `);
    $('#Username').val(playerName);
});


// function


//Function for random item 
function randomSoil(soils) {
    const i = Math.floor(Math.random() * soils.length);
    const sRandom = soils[i];
    if (sRandom == lastSoil) {
        randomSoil(soils);
    }
    lastSoil = sRandom;
    return sRandom;
}

function timeRand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// time function
function time(time, timerField) {
    //var reset
    timeSign = false;
    timerField.innerHTML = time;
    if (!timeSign) {
        setInterval(() => {
            if (time == 0) {
                timeSign = true;
            } else {
                time--;
                timerField.innerHTML = time;
            }

        }, 1000);
    }
}

// gameFlow Function
function start() {
    allMole = 0;
    //Reset Conditiob
    startClick.disabled = true;
    moles.forEach(m => {
        m.classList.toggle('d-none')
    })
    //CountDown Timer
    time(3, timer);
    //gameFlow
    setTimeout(() => gameFlow(), 3000);
}

function gameFlow() {
    //Var reset
    score = 0;
    end = false;
    //HTML DOM Reset
    timer.innerHTML = 30;
    document.querySelector('.timeLabel').innerHTML = 'Your Time';
    scoreBoard.textContent = 0;
    // Timer
    time(30, timer);
    // start mole
    setTimeout(() => moleAppear(), 0);
    //gameEnd
    setTimeout(() => endGame(), 30000);
}

function endGame() {
    token = Math.random();
    document.querySelector('.closeFinal').innerHTML = finalScore();
    document.querySelector('.applause').play();

    end = true;
    moles.forEach(m => {
        m.classList.toggle('d-none');
    });
    document.querySelector('.timeLabel').innerHTML = 'Start In';
    setTimeout(() => {
        submitScore(playerName, score, token);
        startClick.disabled = false;
    }, 100);


}

function moleAppear() {
    allMole++;
    const soilRandom = randomSoil(soils);
    const tRandom = timeRand(500, 1000);
    soilRandom.children[0].style.transition = "TOP 0.3s"
    soilRandom.classList.add('appear');
    setTimeout(() => {
        soilRandom.classList.remove('appear');
        if (!end) {
            moleAppear();
        }

    }, tRandom);
}





// Helper function
function finalScore() {
    return `
     <div class="congrats">
        <div class="container-fluid">

            <div class="row text-center mt-5 mb-5">
                <div class="col mt-5">
                    <img class="mb-3 mt-2" src="img/tikus.png" width="175px" alt="mole">
                    <h2 class="congratulation">Congrats, ${playerName}!!</h2>
                    <span class="d-block congScore">Your Score</span>
                    <h2 class="score">${score}</h2>
                    <span class="d-block congScore">Miss</span>
                    <h3 class="miss">${allMole-score}</h3>
                    <button class="btn btn-outline-light closeFinalBtn mt-5" onclick="closeScore()">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
}

function closeScore() {
    document.querySelector('.congrats').remove();
    document.querySelector('.applause').pause();
}

function whack() {
    score++;

    document.querySelector('.pop').play();
    this.parentNode.classList.remove('appear');
    this.style.transition = "0.2s";

    scoreBoard.textContent = score;
}



function submitScore(name, score, pass) {
    if (pass === token) {
        $('#floatingScore').val(score);
        $('#miss').val(allMole - score);
        fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => {
                console.log('Success!', response);

            })
            .catch(error => console.error('Error!', error.message));
    } else {
        console.error('Jangan Curang Dong!!')
    }
}
