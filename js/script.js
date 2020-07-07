var client= prompt('Buongiorno! scriva il suo nome e il suo Cognome:');
var eta= parseInt(prompt('Adesso avrei bisogno della sua età:'));
var kilometri= parseInt(prompt('E come ultima cosa avrei bisogno di sapere il numero di kilometri che desidera percorrere:'));
var prezzoNoSconto = kilometri * 0.21 ;
var scontoMinori = (prezzoNoSconto * 20 / 100);
var scontoOver = (prezzoNoSconto * 40 / 100);

var prezzoFinale = prezzoNoSconto;
if (eta < 18) {
    prezzoFinale = prezzoNoSconto - scontoMinori;
    document.getElementById('sconto').innerHTML = scontoMinori + '€';
} else if (eta > 65)  {
    prezzoFinale = prezzoNoSconto - scontoOver;
    document.getElementById('sconto').innerHTML = scontoOver + '€';
}

document.getElementById('sconto').innerHTML = 0 + '€';
document.getElementById('prezzo').innerHTML = prezzoFinale.toFixed(2) + '€';
document.getElementById('kilometri').innerHTML =  kilometri + 'km';
document.getElementById('cliente').innerHTML = client;
