'use strict';

let handler = true;

/*
----------
FUNZIONI
----------
*/

// Funzione difficoltà
function difficultyChoice(difficulty) {
    let cellNumber;
    switch (difficulty) {
        case 'hard':
            cellNumber = 49;
            break;
        case 'medium':
            cellNumber = 81;
            break;
        default:
            cellNumber = 100;
    }
return cellNumber;
}

// Funzione numero causale
function bombRandomNumber(cellNumber) {
    return Math.floor(Math.random() * (cellNumber) + 1);
  }

// Funzione per generare le bombe
function bombGenerator(cellNumber) {
    let bombList = [];
    while (bombList.length < 16) {
        let bombNumber = bombRandomNumber(cellNumber);
        if (!bombList.includes(bombNumber)) {
            bombList.push(bombNumber);
        }
    }

    return bombList.sort(function(a, b){return a-b});
}

// Funzione per creare una cella
function myCreateElement(container, gameCell, className, difficultySetting, innerText) {
    const cell = document.createElement(gameCell);
    cell.classList.add(className);
    cell.classList.add(difficultySetting);
    cell.innerText = innerText;
    container.append(cell);
    return cell;
}

// Funzione azioni al click su casella corretta
function clickContinue(counter, element, className, pointsCounter) {
    element.classList.add(className);
    if (!pointsCounter.includes(counter)) {
        pointsCounter.push(counter);
    }
}

// function myHandler() {
//     handler = false;
//     return handler;
// }

// function myHandler() {
//     handler = false;
//     return handler;
// }

function clickCell(i, cellCreated, bombList, msg, pointsCounter, cellNumber, modalMsg) {
    // Condizione per vedere se il la cella contiene una bomba
    if (!bombList.includes(i)) {
        clickContinue(i, cellCreated, 'clicked-continue', pointsCounter);
        
        if (cellNumber - bombList.length === pointsCounter.length) {
            msg.innerHTML = `Congratulazioni, hai vinto! il tuo punteggio è: ${pointsCounter.length}`;
            modal.style.display = 'block';
            modalBox.style.backgroundColor = '#1f5c99'
            modalMsg.innerHTML = `Congratulazioni, hai vinto! il tuo punteggio è: ${pointsCounter.length}`;

        } else {
            msg.innerHTML = `Il tuo punteggio è: ${pointsCounter.length}`;
        }

    } else {
        const bombPosition = document.querySelectorAll('#game-lost');
        for (let k = 0; k < 16; k++) {
            bombPosition[k].classList.add('clicked-lost');
        }
        const stopGame = document.querySelectorAll('.cell');
        for (let k = 1; k <= 100; k++) {}
        msg.innerHTML = `Mi dispiace, hai perso! Il tuo punteggio finale è: ${pointsCounter.length}`;
        modal.style.display = 'block';
        modalBox.style.backgroundColor = '#680808';
        modalMsg.innerHTML = `Mi dispiace, hai perso! Il tuo punteggio finale è: ${pointsCounter.length}`;  
        // let stopCell = document.querySelectorAll('.cell');
        // console.log(stopCell);
        // for (let l = 1; l <= 100; l++){
        //     if (stopCell[l]) {
        //         stopCell[l].removeEventListener('click', clickFunction);
        //     }
        // }
        // myHandler();
        
        // document.querySelectorAll('.cell').forEach.removeEventListener('click', clickFunction);
    }
    // console.log(handler);
}

// function click() {
//     clickCell(i, cellCreated, bombList, msg, pointsCounter, cellNumber);
// }

/*
----------
MAIN
----------
*/

// Variabili bottone evento e container griglia
const startGame = document.getElementById('generate-game');
const gameContainer = document.querySelector('.container');
const modal = document.getElementById('myModal');
const reStartGame = document.getElementById('modal-button');
const modalMsg = document.getElementById('modal-msg');
const modalBox = document.querySelector('.modal-content');

// Evento per iniziare il gioco
startGame.addEventListener('click',
function() {

    // Funzione per settare il numero di celle
    const difficultySetting = document.getElementById('difficulty-setting').value;
    const cellNumber = difficultyChoice(difficultySetting);

    // Generatore lista bombe
    const bombList = bombGenerator(cellNumber);

    // Pulizia della pagina
    const msg = document.getElementById('point-counter');
    gameContainer.innerHTML = '';
    msg.innerHTML = '';
    modalMsg.innerHTML = '';

    // array numeri corretti selezionati
    let pointsCounter = [];

    // Ciclo per creare la griglia e assegnare event listener
    for (let i = 1; i <= cellNumber; i++) {
        let cellCreated;
        if (!bombList.includes(i)) {
            cellCreated = myCreateElement(gameContainer, 'div', 'cell', difficultySetting, i);
        } else {
            cellCreated = myCreateElement(gameContainer, 'div', 'cell', difficultySetting, i);
            cellCreated.setAttribute('id', 'game-lost');
        }
        // function click() {
        //     clickCell(i, cellCreated, bombList, msg, pointsCounter, cellNumber);
        // }

        const clickFunction = function(){
            clickCell(i, cellCreated, bombList, msg, pointsCounter, cellNumber, modalMsg); 
        }
        
        
        // Evento click
        // handler = myHandler();
        cellCreated.addEventListener('click', clickFunction);
        // cellCreated.removeEventListener('click', clickFunction, handler);
    }
}
)

reStartGame.addEventListener('click',
function() {
    modal.style.display = 'none';
    // Funzione per settare il numero di celle
    const difficultySetting = document.getElementById('difficulty-setting').value;
    const cellNumber = difficultyChoice(difficultySetting);

    // Generatore lista bombe
    const bombList = bombGenerator(cellNumber);

    // Pulizia della pagina
    const msg = document.getElementById('point-counter');
    gameContainer.innerHTML = '';
    msg.innerHTML = '';
    modalMsg.innerHTML = '';

    // array numeri corretti selezionati
    let pointsCounter = [];

    // Ciclo per creare la griglia e assegnare event listener
    for (let i = 1; i <= cellNumber; i++) {
        let cellCreated;
        if (!bombList.includes(i)) {
            cellCreated = myCreateElement(gameContainer, 'div', 'cell', difficultySetting, i);
        } else {
            cellCreated = myCreateElement(gameContainer, 'div', 'cell', difficultySetting, i);
            cellCreated.setAttribute('id', 'game-lost');
        }
        // function click() {
        //     clickCell(i, cellCreated, bombList, msg, pointsCounter, cellNumber);
        // }

        const clickFunction = function(){
            clickCell(i, cellCreated, bombList, msg, pointsCounter, cellNumber, modalMsg); 
        }
        
        
        // Evento click
        // handler = myHandler();
        cellCreated.addEventListener('click', clickFunction);
        // cellCreated.removeEventListener('click', clickFunction, handler);
    }
}
)