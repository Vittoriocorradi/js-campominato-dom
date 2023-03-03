'use strict';

/*
----------
FUNZIONI
----------
*/

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