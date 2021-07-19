// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mail = prompt("Inserisci la tua mail: ");
console.log(mail);

var mail_access = ["a@boolean.it", "b@boolean.it", "c@boolean.it", "d@boolean.it", "e@boolean.it", "f@boolean.it", "g@boolean.it"];
var controllo = false; 

for(var i = 0; i < mail_access.length; i++){
    if(mail == mail_access[i]){
        controllo = true;
    }
}

if(controllo){
    console.log("Accesso Consentito");
    document.getElementById("success").innerHTML = "Ciao, la mail inserita ("+ mail + ") possiede l'accesso al sito!";
}
else{
    console.log("Accesso non Consentito");
    document.getElementById("declined").innerHTML = "Ciao, la mail inserita ("+ mail + ") purtroppo non possiede l'accesso al sito! La preghiamo di riprovare.";
}