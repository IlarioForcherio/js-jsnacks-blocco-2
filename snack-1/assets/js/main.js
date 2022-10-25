

//*Snack1*
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).



//inserire un numero(prompt)
//funzione parità 
//se dispari stampare numero stampato  + 1


let numero = parseInt(prompt("inserisci un numero"));

if (( numero % 2 ) == 0 ){
 console.log(numero);
}
else if((numero % 2)!=0) { 
console.log(numero + 1);
}