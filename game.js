//Get the document's elements
let rockButton = document.querySelector('.rock__btn');
let paperButton = document.querySelector('.paper__btn');
let scissorsButton = document.querySelector('.scissors__btn');

let machinesRockButton = document.querySelector('.machine__rock__btn');
let machinesPaperButton = document.querySelector('.machine__paper__btn');
let machinesScissorsButton = document.querySelector('.machine__scissors__btn');

let gameRound = document.querySelector('.game__round');
let playerImageDiv = document.querySelector('.player__img__div');
let playerCurrentImage = document.querySelector('.player__current__img');
let machineImageDiv = document.querySelector('.machine__img__div');
let machineCurrentImage = document.querySelector('.machine__current__img');
let playerScore = document.querySelector('.player__score');
let gameTies = document.querySelector('.game__ties');
let machineScore = document.querySelector('.machine__score');

//Game Variables
let currentRound = 1;
let playerVictories = 0;
let tiesOccurred = 0;
let machineVictories = 0;
let playerCurrentOption = null;
let machineCurrentOption = null;

//Functions
//First load results and round
function displayData() {
    gameRound.innerHTML = `ROUND ${currentRound}`;
    playerScore.innerHTML = playerVictories;
    gameTies.innerHTML = tiesOccurred;
    machineScore.innerHTML = machineVictories;
    if (machineCurrentOption === 0) {
        machinesRockButton.style.background = 'black';
        machinesPaperButton.style.background = 'gray';
        machinesScissorsButton.style.background = 'gray';
    } else if (machineCurrentOption === 1) {
        machinesRockButton.style.background = 'gray';
        machinesPaperButton.style.background = 'black';
        machinesScissorsButton.style.background = 'gray';
    } else if (machineCurrentOption === 2) {
        machinesRockButton.style.background = 'gray';
        machinesPaperButton.style.background = 'gray';
        machinesScissorsButton.style.background = 'black';
    }
}

displayData();

//Gamming

function shakingHands() {
    playerCurrentImage.style.cssText = `
        animation-duration: 1.1s;
        animation-iteration-count: 1;
        animation-name: playerAnimation;
        animation-timing-function: ease;
    `;
    machineCurrentImage.style.cssText = `
        animation-duration: 1.1s;
        animation-iteration-count: 1;
        animation-name: machineAnimation;
        animation-timing-function: ease;
    `;
    setTimeout(()=> {
        playerCurrentImage.style.cssText = `
        animation-iteration-count: 0;
        `;
        machineCurrentImage.style.cssText = `
        animation-iteration-count: 0;
        `;
    },1000)
};

function disablingButtonsWhileShaking() {
    rockButton.setAttribute('disabled', 'true');
    paperButton.setAttribute('disabled', 'true');
    scissorsButton.setAttribute('disabled', 'true');
    setTimeout(() => {
        rockButton.removeAttribute('disabled');
        paperButton.removeAttribute('disabled');
        scissorsButton.removeAttribute('disabled');
    },1150);
};

function machinesRandomOption() {
    machineCurrentOption = Math.floor(Math.random() * 3);
};

function restartInitialImage() {
    playerCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/arm.png?alt=media&token=e7461542-1a37-451b-a705-d08716d531fd';
    machineCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/machine-arm.png?alt=media&token=48fb92a6-458f-4a3e-9ec9-d512e1bc29d2';
}

function playerCurrentImageSetter() {
    if (playerCurrentOption === 0) {
        playerCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/rockOption.png?alt=media&token=ae6c4185-b80d-43fd-a0b9-6775a4d65b92';
    } else if (playerCurrentOption === 1) {
        playerCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/paperOption.png?alt=media&token=a733beb1-6487-4ea8-8323-0f7330e5abfa';
    } else {
        playerCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/scissorsOption.png?alt=media&token=85a032c0-9779-42b5-b1b0-353950472d03';
    }
}

function machineCurrentImageSetter() {
    if (machineCurrentOption === 0) {
        machineCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/rockOptionInverted.png?alt=media&token=cf526e3f-d9f7-4dc0-9a27-f50edf00ec29';
    } else if (machineCurrentOption === 1) {
        machineCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/paperOptionInverted.png?alt=media&token=18f3a0ed-2c2e-43bd-bfc2-6ca09c5b547c';
    } else {
        machineCurrentImage.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-oscarvedo.appspot.com/o/scissorsOptionInverted.png?alt=media&token=1b774cea-24b0-43d4-81eb-389848c59493';
    }
};

function roundAnalizer() {
    currentRound++;
    if (playerCurrentOption === machineCurrentOption) {
        tiesOccurred++;
    } else if (playerCurrentOption === 0 && machineCurrentOption === 2 || playerCurrentOption === 1 && machineCurrentOption === 0 || playerCurrentOption === 2 && machineCurrentOption === 1) {
        playerVictories++;
    } else {
        machineVictories++;
    }
    displayData();
};

function rockOptionTurn() {
    restartInitialImage()
    shakingHands();
    disablingButtonsWhileShaking();

    //Player and machine options
    playerCurrentOption = 0;
    machinesRandomOption();

    //Choosen options images
    setTimeout(() => {
        playerCurrentImageSetter();
        machineCurrentImageSetter();
        roundAnalizer();
    },1000);
};

function paperOptionTurn() {
    restartInitialImage()
    shakingHands();

    //Player and machine options
    playerCurrentOption = 1;
    machinesRandomOption();

    //Choosen options images
    setTimeout(() => {
        playerCurrentImageSetter();
        machineCurrentImageSetter();
        roundAnalizer();
    },1000);
};

function scissorsOptionTurn() {
    restartInitialImage()
    shakingHands();

    //Player and machine options
    playerCurrentOption = 2;
    machinesRandomOption();

    //Choosen options images
    setTimeout(() => {
        playerCurrentImageSetter();
        machineCurrentImageSetter();
        roundAnalizer();
    },1000);
};


rockButton.addEventListener('click', rockOptionTurn);
paperButton.addEventListener('click', paperOptionTurn);
scissorsButton.addEventListener('click', scissorsOptionTurn);