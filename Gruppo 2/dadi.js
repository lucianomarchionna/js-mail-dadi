// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var numero_giocatore = Math.floor(Math.random() * 6) + 1;
var numero_computer = Math.floor(Math.random() * 6) + 1;

console.log(numero_giocatore);
document.getElementById("Number_player").innerHTML = "Il numero del giocatore è: " + numero_giocatore;
console.log(numero_computer);
document.getElementById("Number_computer").innerHTML = "Il numero del computer è: " + numero_computer;

if(numero_giocatore>numero_computer){
    console.log("Il giocatore ha vinto");
    document.getElementById("risultato").innerHTML = "Il giocatore ha vinto!";
}
else if (numero_giocatore<numero_computer){
    console.log("Il computer ha vinto");
    document.getElementById("risultato").innerHTML = "Il computer ha vinto!";
}
else{
    console.log("Pareggio");
    document.getElementById("risultato").innerHTML = "Si è verificato un pareggio.";
}
