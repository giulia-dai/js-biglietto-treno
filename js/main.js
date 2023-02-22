/*

Quanti Km devi percorrere?

Quanti anni hai?

Ogni Km costa 0.21€

sconto minorenne: 20%

sconto over 65: 40%

*/

let kilometri = parseInt(prompt("inserisci il numero dei Km da percorrere"));
let età = parseInt(prompt("inserisci la tua età"));

const prezzoPerKm = 0.21;

const prezzoIntero = kilometri*prezzoPerKm .toFixed(2);

const prezzoMinorenni = (prezzoIntero / 100) * 20;

const prezzoOver = (prezzoIntero / 100) * 40;








let minorenne = 18;
let over = 64;

console.log (kilometri);
console.log (età);
console.log (prezzoIntero);
console.log (prezzoMinorenni);








