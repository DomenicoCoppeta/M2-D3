//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 3
let num2 = 2

if (num1 > num2) { 
  console.log ('num1 è maggiore di num2')
} else if (num2 > num1) {
  console.log ('num2 è maggiore di num1')
} else if (num1 = num2){
  console.log ('num1 e num2 sono uguali')
}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let i = 9

if (i < 5){
  console.log("Tiny")
} else if (i >= 5 && i < 10){
  console.log("Small")
} else if (i >= 10 && i < 15){
  console.log("Medium")
} else if (i >= 15 && i < 20){
  console.log("Large")
} else if (i > 20){
  console.log("Huge")
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */


for (let i=0; i < 11; i++) {
  switch (i) {

  case 3:
  continue

  case 8:
  continue

  default:
  console. log(i)
  }
}

// Versione alternariva 

for (let i=0; i < 11; i++) {
  switch (i) {
  case 0:
  console. log(0)
  break;
  case 1:
  console. log(1)
  break;
  case 2:
  console.log(2)
  break;
  case 3:
  continue
  case 4:
  console. log(4)
  break;
  case 5:
  console. log (5)
  break;
  case 6:
  console. log (6)
  break;
  case 7:
  console.log (7)
  break;
  case 8:
  continue
  case 9:
  console. log(9)
  break;
  case 10:
  console. log(10)
  break;
  default:
  console. log(i)
  }
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i=0; i < 16; i++) {
  switch (i) {
  default:
  if (i % 2 === 0) {
    console.log(i, "numero pari") 
  } else if (i % 2 === 1){ 
    console.log(i, "numero dispari")  
  }
  }
}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let x = 11
let y = 56

console.log( x + y === 8 || x - y === 8 || y - x === 8)

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 50
const shipping = 10

if (totalShoppingCart < 50) {
  totalShoppingCart = (totalShoppingCart + shipping)
  console.log(totalShoppingCart)
} else if (totalShoppingCart => 50) {
  console.log(totalShoppingCart)
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 50
const shipping = 10
let blackFriday = true // in caso di  Black Friday viene applicato il 20% di sconto sul carrello

if (blackFriday) {
    totalShoppingCart = totalShoppingCart * 0.8
} 

if (totalShoppingCart < 50) {
  totalShoppingCart = (totalShoppingCart + shipping)
  console.log(totalShoppingCart)
} else if (totalShoppingCart => 50) {
  console.log(totalShoppingCart)
}



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let isMale = false
let gender 

if (isMale) {
    gender = "Male"
    console.log(gender)
} else if (!isMale) {
    gender = "Female"
    console.log(gender)
}



/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i=0; i < 101; i++) {
  switch (i) {
  default:
  if (i === 0){
      console.log(i)
  } else if (i % 3 === 0 && i % 5 === 0 ){ 
      console.log("FizzBuzz")
  } else if (i % 3 === 0){
      console.log("Fizz")
  } else if (i % 5 === 0){
      console.log("Buzz")
  } else if (i % 5 !== 0){
      console.log(i)
  } else if (i % 3 !== 0){
      console.log(i)
  }
}
}