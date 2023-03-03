'use strict';

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

    return bombList;
}


// Funzione per creare una cella
function myCreateElement(gameCell, className, difficultySetting, innerText) {
    const cell = document.createElement(gameCell);
    cell.classList.add(className);
    cell.classList.add(difficultySetting);
    cell.innerText = innerText;
    return cell;
}

// Funzione click sulla cella
function elementClick(cell, counter, className) {
    
    cell.addEventListener('click',
    function() {
        console.log(counter);
        cell.classList.toggle(className);
    }
    )
}


/*
----------
MAIN
----------
*/

// Variabili bottone evento e container griglia
const startGame = document.getElementById('generate-game');
const gameContainer = document.querySelector('.container');

// Evento per iniziare il gioco
startGame.addEventListener('click',
function() {

    // Funzione per settare il numero di celle
    const difficultySetting = document.getElementById('difficulty-setting').value;
    const cellNumber = difficultyChoice(difficultySetting);

    // Generatore lista bombe
    const bombList = bombGenerator(cellNumber);
    
    // Pulizia della pagina
    gameContainer.innerHTML = '';

    // Ciclo per creare la griglia e assegnare event listener
    for (let i = 1; i <= cellNumber; i++) {
        const cellCreated = myCreateElement('div', 'cell', difficultySetting, i);
        gameContainer.append(cellCreated);
        elementClick(cellCreated, i, 'clicked');
    }
}
)