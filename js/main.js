/**
 * PASSWORD GENERATOR
 */

//Ottenere il nome dell'utente
const nome = prompt('Inserisci il tuo nome utente');
console.log(nome);

//Ottenere cognome dell'utente
const cognome = prompt('Inserisci il tuo cognome utente');
console.log(cognome);


//Ottonere il suo colore preferito
const colore = prompt('Quale è il tuo colore preferito?');
console.log(colore);

//Scrivere sulla pagina tutti i dati ricevuti
// - selezionare elemento html (in questi caso "risultato" )
// - assegnare i valori all'elemento 
document.getElementById('risultato').innerHTML = 'La tua password è ' + nome + cognome + colore + '21';