/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale avrà massimo due decimali
*/

// Dichiarazione Nome Utente
const inputUserName = document.getElementById('userName');

// Dichiarazione Distanza
const inputKm = document.getElementById('km');

// Dichiarazione Età
const inputAge = document.getElementById('age');

// Dichiarazione Button (genera)
const generateTicket = document.getElementById('generateTicket');

// Dichiarazione Button (annulla)
const eliminateTicket = document.getElementById('eliminateTicket');

// Dichiarazione Classe 'Il tuo biglietto'
const ticketPrinted = document.querySelector(".ticket-printed");

// Dichiarazione Risultato in span (Nome Passeggero)
const printedName = document.getElementById('printedName');

// Dichiarazione Risultato in span (€ Biglietto)
const printedPrice = document.getElementById('printedPrice');

// Al click del pulsante Genera
generateTicket.addEventListener('click',

  function() {

    // Mostra 'Il tuo biglietto'
    ticketPrinted.classList.add('active');

    // Stampa del nome all'interno di Span nella sez. 'Il tuo biglietto'
    const outputUserName = inputUserName.value;

    printedName.innerHTML = outputUserName;

    // Stampa del prezzo del biglietto all'interno di Span nella sez. 'Il tuo biglietto'
    const outputKm = parseInt(inputKm.value);
    
    const outputAge = parseInt(inputAge.value);
    
    let price = 0.21 * outputKm;
      if (outputAge < 18) {
        price = price * 0.8;
      } else if (outputAge > 65) {
        price = price * 0.6;
      }

    printedPrice.innerHTML = price.toFixed(2) + "€";
  }
);

// Al click del pulsante Annulla
eliminateTicket.addEventListener('click',

  function() {

    // Nascondi 'Il tuo biglietto'
    ticketPrinted.classList.remove('active');

    // Rimuovi Parametri Inseriti
    inputUserName.value = '';
    
    inputKm.value = '';
    
    inputAge.value = '';
  }
);



