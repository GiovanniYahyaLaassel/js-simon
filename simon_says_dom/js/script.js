

//Creo dei numeri casuali in pagina utilizzando una funzione 
function generateRandomNumbers() {
    // Creo un array vuoto per generare i numeri casuali
    const randomNumbers = [];
    
    // Creo un ciclo for per generare numeri tra 1 e 50
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1 ;
        randomNumbers.push(randomNumber);
        console.log(randomNumbers);
    }
}

