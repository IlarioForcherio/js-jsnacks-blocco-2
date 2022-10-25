//*Snack2*
//Generatore di “nomi cognomi” casuali del grande gatsby:
//Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale

// array nomi
//array cognomi
// seleziona casualmente con funzionenumeri casuali
// unione delle due liste con variabile + variabile 

// creazione array
let nomi = ["Onofrio","Arcibaldo","Gherardo","Edmondo","Amilcare","Dusnella","Edora","Leocadia","Nelide","Monda"];
let cognomi = ["Senzaquattrini","Barbatosta","Scaccabarozzi","Stampachiacchere","Magnarapa","Cavadenti","Tempofosco","Stenterello","Grattastinchi","Fagiolino"];

//funzione che seleziona casualmente dalla lunghezza array nome
let randomName = nomi[Math.floor(Math.random() * nomi.length)];
  
////funzione che seleziona casualmente dalla lunghezza array nome
let randomSurname = cognomi[Math.floor(Math.random() * cognomi.length)];
  
//stampa delle due
  console.log(randomName + " " + randomSurname);


 

  