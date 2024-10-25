//Creo dei numeri casuali in pagina utilizzando una funzione 
let randomNumbers = [];
function generateRandomNumbers() {
    // Creo un array vuoto per generare i numeri casuali
     randomNumbers = [];
    
    // Creo un ciclo for per generare numeri tra 1 e 50
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1 ;
        randomNumbers.push(randomNumber);
        console.log(randomNumbers);
    }

    // Seleziono l'elemento ul dove mostrerò i numeri 
    const numberList = document.getElementById('numbers-list') ;

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
    setTimeout(function(){
    numberList.innerHTML = '';  //nascondo i numeri 
        console.log('I numeri sono stati nascosti')
        
    },30000); 

         
    // Mostro gli input eliminando la classe d-none
    const inputForm = document.getElementById('answers-form');
    // rimuovo la classe che viene nascosta dal display none
    inputForm.classList.remove('d-none');

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
        const message = document.getElementById('message');
        message.textContent = `Hai indovianto ${correctNumbers} numeri su 5`;
        // seleziono l'elemento i numerri corretti
        
        const correctNumbersList = document.getElementById('correct-numbers');
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


// Chiamo la funzione quando il dom e caricato
document.addEventListener('DOMContentLoaded', function(){
    generateRandomNumbers();

         // aggiungo l'evento al formm per verificare che i nujeri sono corretti
         const form = document.getElementById('answers-form');
         form.addEventListener('submit', function(event){
             event.preventDefault();
             checkNumber();
         })

});





