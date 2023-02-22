/*

Quanti Km devi percorrere?

Quanti anni hai?

Ogni Km costa 0.21€

sconto minorenne: 20%

sconto over 65: 40%

*/

let kilometri = parseInt(prompt("inserisci il numero dei Km da percorrere"));
let eta = parseInt(prompt("inserisci la tua età"));

let minorenne = 18;
let over = 65;

const prezzoPerKm = 0.21;

const prezzoIntero = kilometri * prezzoPerKm;

const scontoMinorenni = (prezzoIntero / 100) * 20;
const totaleMinorenni = prezzoIntero - scontoMinorenni;

const scontoOver = (prezzoIntero / 100) * 40;
const totaleOver = prezzoIntero - scontoOver;

if (eta < minorenne) {
  
  document.getElementById("discount20").innerHTML =  `Hai diritto ad uno sconto del 20% sul prezzo iniziale. Il tuo totale è di ${totaleMinorenni.toFixed(2) }€! Buon Viaggio!`
  
} else if (eta > over){
    document.getElementById("discount40").innerHTML =  `Hai diritto ad uno sconto del 20% sul prezzo iniziale. Il tuo totale è di ${totaleOver.toFixed(2) }€! Buon Viaggio!`
  

} else{
  document.getElementById("standard_price").innerHTML = `"Il totale del tuo biglietto è di ${prezzoIntero.toFixed(2) }€! Buon Viaggio!`
 
}














