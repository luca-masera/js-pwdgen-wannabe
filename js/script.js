

/*ESERCIZIO:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

const numero = 21;


let nomeUtente = prompt('Gentile utente, il tuo nome?');
console.log(nomeUtente);

let cognomeUtente = prompt('Gentile utente, il tuo cognome?');
console.log(cognomeUtente);

let colorePreferitoUtente = prompt('Gentil utente il tuo colore preferito?');
console.log(colorePreferitoUtente);

let password =
 `<p>
 La tua password è  ${nomeUtente}${cognomeUtente}${colorePreferitoUtente}${numero}
 </p>`  
console.log(password)