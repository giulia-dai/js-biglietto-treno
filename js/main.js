/*

Quanti Km devi percorrere?

Quanti anni hai?

Ogni Km costa 0.21€

sconto minorenne: 20%

sconto over 65: 40%

*/

let kilometri = parseInt(prompt("inserisci il numero dei Km da percorrere"));
let età = parseInt(prompt("inserisci la tua età"));

let minorenne = 18;
let over = 65;

const prezzoPerKm = 0.21;

const prezzoIntero = kilometri*prezzoPerKm .toFixed(2);

const scontoMinorenni = (prezzoIntero / 100) * 20;
const totaleMinorenni = prezzoIntero - scontoMinorenni;

const scontoOver = (prezzoIntero / 100) * 40;
const totaleOver = prezzoIntero - scontoOver;

if (età < minorenne) {
  


} else if (età > over){
    console.log ("Il cliente ha diritto allo sconto Over");
}





console.log (kilometri);
console.log (età);
console.log (prezzoIntero);









