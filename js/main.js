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

// Funzione azioni al click su casella corretta
function clickContinue(counter, element, className, pointsCounter) {
    element.classList.add(className);
    if (!pointsCounter.includes(counter)) {
        pointsCounter.push(counter);
    }
}

// Funzione azioni al click su casella errata
function clickAbort(element, className) {
    element.classList.add(className);
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

    // array numeri corretti selezionati
    let pointsCounter = [];

    // Ciclo per creare la griglia e assegnare event listener
    for (let i = 1; i <= cellNumber; i++) {
        // Cella creata e appesa al container
        const cellCreated = myCreateElement('div', 'cell', difficultySetting, i);
        gameContainer.append(cellCreated);

        // Evento click
        cellCreated.addEventListener('click',
        function() {
            const msg = document.getElementById('point-counter');

            // Condizione per vedere se il la cella contiene una bomba
            if (!bombList.includes(i)) {
                clickContinue(i, cellCreated, 'clicked-continue', pointsCounter);

                // Condizione caso di vittoria
                if (cellNumber - bombList.length === pointsCounter.length) {
                    msg.innerHTML = `Congratulazioni, hai vinto! il tuo punteggio è: ${pointsCounter.length}`;
                // Condizione in caso di risposta corretta ma non vittoria
                } else {
                    msg.innerHTML = `Il tuo punteggio è: ${pointsCounter.length}`;
                }   
                           
            } else {
                clickAbort(cellCreated, 'clicked-abort');
                msg.innerHTML = `Mi dispiace, hai perso! Il tuo punteggio finale è: ${pointsCounter.length}`;
            }
        }
        )
    }
}
)