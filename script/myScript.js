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

// Dichiarazione Button 
const generateTicket = document.getElementById('generateTicket');

// Dichiarazione Risultato in span (Nome Passeggero)
const printedName = document.getElementById('printedName');

generateTicket.addEventListener('click',

  function() {
    const outputUserName = userName.value;
    printedName.textContent = outputUserName;
  }

);



