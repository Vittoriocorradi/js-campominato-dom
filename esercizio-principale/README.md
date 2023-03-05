ESERCIZIO CAMPO MINATO

---------
PARTE 1
---------

FUNZIONI

//funzione per creare un elemento, attribuirgli una classe e un testo
Creo una funzione myCreateElement che avrà come argomenti il tag da creare, una classe da aggiungere e il testo che verrà inserito all'interno dell'elemento.
    Creo una variabile element che come valore avrà un elemento creato a seconda dell'argomento
    Aggiungo a element la classe dell'argomento
    Scrivo all'interno di element il testo dell'argomento
Estrapolo element


//Funzione per aggiungere una classe e scrivere un console log al click sull'elemento
Creo una funzione elementClick che avrà per argomenti un elemento, un contatore e una classe

    Inizio un evento al click sull'elemento 

        Scrivo il contatore in console
        Aggiungo all'elemento una classe per cambiare il colore

//Funzione bonus per selezionare la difficoltà
Creo una funzione difficultyChoice che avrà per argomento un elemento

    Creo una variabile cellNumber
    Inizio uno switch che darà un valore a cellNumber a seconda della difficoltà inserita
    Estrapolo cellNumber


ESERCIZIO

Creo una variabile button per identificare il bottone che andrà a generare la griglia
Creo una variabile container per identificare il .container dell'html

Inizio un evento al click del bottone

    Creo una variabile difficultySetting che avrà come valore il risultato di un input select
    Creo una variabile CellNumber a cui attribuirò come valore il risultato estrapolato dalla funzione difficultyChoice con argomento difficultySetting

    Attribuisco vuoto a container così da ripulire la pagina al click del bottone

    Inizio un ciclo con i che va da 1 a 100 
        Creo un elemento usando la funzione myCreateElement
        Appendo l'elemento creato al container
        aggiungo la funzione elementClick


---------
PARTE 2
---------

Creo un array bombList in cui andranno a esseci 16 numeri casuali che possono andare da 1 al numero di celle nella griglia
Uso un ciclo while per aggiungere i numeri (generati da una funzione) all'array e controllare che non si ripetano

Al click su una cella inizio una condizione per vedere sei il numero della cella cliccata fa parte dell'array bombList
SE il numero fa parte dell'array bombList
    la cella si colora di rosso
    (tutte le celle si colorano di rosso)
    riporta al giocatore che ha perso la partita
    (cliccando sulle celle non si attiverà più l'evento)
    termina la partita
ALTRIMENTI
    la cella si colora di blu
    il contatore punteggio aumenta di 1
    riporta al giocatore il suo punteggio
    rimuovi l'evento dalla cella stessa
    SE il giocatore raggiunge il numero massimo possibile di numeri consentiti
        riporta al giocatore che ha vinto la partita