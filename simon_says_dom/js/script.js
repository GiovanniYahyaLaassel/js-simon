//Definisco tutte le varibili e costanti 

let randomNumbers = [];

const numberList = document.getElementById('numbers-list') ;  // Seleziono l'elemento ul dove mostrerò i numeri 
const inputForm = document.getElementById('answers-form'); //Seleziono il form con gli input per inserire i numeri
const form = document.getElementById('answers-form'); // Seleziono per l'evento di verifica
const message = document.getElementById('message'); // Seleziono il messaggio di risultato
const correctNumbersList = document.getElementById('correct-numbers'); //Seleziono per mostare i numeri coretti
document.addEventListener('DOMContentLoaded', initializeGame);//// Chiamo la funzione quando il dom e caricato

function initializeGame() {
    generateRandomNumbers();
    // controllo che i numeri  siano corretti
    form.addEventListener('submit', function(event){
        event.preventDefault();
        checkNumber();
    });
};


function generateRandomNumbers() {
    // Creo un array vuoto per generare i numeri casuali
     randomNumbers = [];
    
    // Creo un ciclo for per generare numeri tra 1 e 50
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1 ;
        randomNumbers.push(randomNumber);
        console.log(randomNumbers);
    }

    // pulisco elementi precedenti
    numberList.innerHTML = '';

    // Ciclo per creare un elemento li per ogni numero casuale ed aggiungerlo alla lista
    for (let i = 0; i <randomNumbers.length; i++) {
        // creo l'elemento li
        const listItem = document.createElement('li');
        // imposto il numero come l'elemento della lista 
        listItem.textContent = randomNumbers[i]
        // aggiungo li alla lista 
        numberList.appendChild(listItem); 
    }

 
    //  Impostare un timer di 30 secondi per nascondere i numeri 
    let countdown = 30;
    const countdownDisplay = document.getElementById('countdown');
    countdownDisplay.textContent = `Tempo rimante: ${countdown} s`;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = `Tempo rimante: ${countdown} s`;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            numberList.innerHTML = ''; // nascondo i numeri
            console.log('I numeri sono stati nascosti');
            inputForm.classList.remove('d-none'); //Rimuovo la classe d-none
            inputForm.classList.add('answers-form-visible'); //mostro il form per l'inserimento dei numeri

        }
    },300);
};


    // creo una funzione che mi permetta di confrontare i numeri inseriti dell'utente

    function checkNumber() {
        // recupero i numeri inseriti
        const usersNumber =[];
        const inputs = document.querySelectorAll('#input-group input');

    // utilizzo un ciclo per prendere i numeri
    for( let i = 0; i < inputs.length; i++) {
        const value = parseInt(inputs[i].value);  //aggiungo i numeri inseriti all'array
        if (!isNaN(value)){
            usersNumber.push(value);
        }
    }

    // confornto i numeri generati con quelli dell'utente 
    let correctNumbers = 0 ;
    let correctList = [];
    // ciclo per vedere se il numero e corretto
    for (let i = 0; i < usersNumber.length; i++) {
        //controllo se il numero e presente 
        if (randomNumbers.includes(usersNumber[i])) {
            correctNumbers++ // incremento il numero corretto
            correctList.push(usersNumber[i]);
        }
    }


    // funzione che mostra i risultati all'utente
    displayResults(correctNumbers, correctList);

    function displayResults() {
        // mostro il numero totale dei numeri indovinati 
        message.textContent = `Hai indovianto ${correctNumbers} numeri su 5`;
        // seleziono l'elemento i numerri corretti
        correctNumbersList.innerHTML = ''; // svuoto il contenuto precedente 

        // faccio un ciclo che mostra i risulati indovinati 
        if (correctList.length > 0) {
            for (let i = 0; i < correctList.length; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = `Numero corretto ${correctList[i]}`;
                correctNumbersList.appendChild(listItem);
            }
        } else {
            correctNumbersList.textContent = 'Non hai indovinato nessun numero';
        
        }
    } 
};





