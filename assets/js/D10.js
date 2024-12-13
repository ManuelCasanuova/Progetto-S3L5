/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

console.log("JS Basics");


/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci 
  il risultato della somma tra i valori 10 e 20.
*/

console.log("Esercizio A");

let sum= 10+20; 

/* oppure 

let a=10
let b=20
let sum=a+b */

console.log("La somma è: ", sum);


console.log("****");


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un 
  numero casuale tra 0 e 20 (deve essere generato 
  dinamicamente a ogni esecuzione).
*/

console.log("Esercizio B");

let random= Math.floor(Math.random()*21);
console.log("Il numero estratto è: ", random);

console.log("****");

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci 
  un oggetto contenente le seguenti proprietà: name = il 
  tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("Esercizio C");

let me= {
  name: "Manuel",
  surname: "Casanuova",
  age: 31,
}

console.log("Eccome come appare l'oggetto 'me'", me)

console.log("****");

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente 
  la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("Esercizio D");

delete me.age;

console.log("Ecco come appare l'oggetto 'me' senza age:", me);

console.log("****");

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente 
  all'oggetto precedentemente creato un array chiamato 
  "skills", contenente i linguaggi di programmazione 
  che conosci.
*/

console.log("Esercizio E");

me.skills = ["Html","Css","Js_Basic"];

console.log("Ecco come appare l'oggetto 'me' con l'aggiunta delle mie skills: ",me);

console.log("****");

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo 
  elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("Esercizio F");

let skillAppresa = "Js_Intermediate"

me.skills.push(skillAppresa)

console.log("Ecco come appare l'oggetto 'me' con le mie skills complete: ", me); //Per visualizzare l'array con le mie skills completo è necessario commentare l'esercizio G

console.log("****");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente 
  l'ultimo elemento dall'array "skills" contenuto 
  nell'oggetto "me".
*/

console.log("Esercizio G");

const skillRimossa = me.skills.pop()

console.log("Ecco come appare l'oggetto 'me' senza l'ultima delle skilss: ",me);

console.log("Questa è la skills che è stata rimossa: ", skillRimossa)


console.log("****");

// Funzioni
console.log("");
console.log("Funzioni");


/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero 
  casuale tra 1 e 6.
*/

console.log("Esercizio 1");

function dice(){
  let random= Math.floor(Math.random()*6)+1;
  return random;
}

let risultato= dice()
console.log(`Il dado da come risultato: ${risultato}`);

/*let rndBtn = document.querySelector("#rndBtn");

rndBtn.addEventListener("click", () => {

  let risultato = dice();
  console.log(`Il dado da come risultato: ${risultato}`);
  let resultElement = document.querySelector("#result");
  resultElement.textContent = `Il dado da come risultato: ${risultato}`;
});
*/


console.log("****");

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due 
  numeri come parametri e ritorna il maggiore dei due.
*/

console.log("Esercizio 2");

function whoIsBigger(valore1, valore2){
  console.log(`I valori inseriti sono: ${valore1} e ${valore2}`)
  if(valore1>valore2){
    console.log("Il primo valore inserito è il maggiore:", valore1)
    let valore1= document.innerText(valore1)
  }
    else if(valore1===valore2) {
      //alert("Sono stati inseriti due valori uguali") per renderlo leggermentre più dinamico
      console.log("Sono stati inseriti due valori uguali")
    }
  
    else{
    console.log("Il secondo valore inserito è il maggiore:", valore2)
  } 
}

//let valore1 = parseInt(prompt("Inserisci il primo valore:"));  ho scritto il codice in modo tale da rendere l'utente colui che immette i dati
//let valore2 = parseInt(prompt("Inserisci il secondo valore:"));

whoIsBigger(/*valore1*/ 10, /*valore2*/ 20);

console.log("****");

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una 
  stringa come parametro e ritorna un'array contenente ogni 
  parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", 
  "Coding"]
*/

console.log("Esercizio 3");

function splitMe(string1){
  let kenobi = string1.split(" ");
  return kenobi;
}

let kenobis = splitMe("Hello there General Kenobi");
console.log(kenobis);

/*
function splitMe(string1,string2){
  let kenobi = string1.split(" ");
  let grievous = string2.split(" ");
  let kg = kenobi.concat(grievous);
  return kg;
}
let mix = splitMe("Hello there", "General Kenobi");
console.log(mix);

*/ 

console.log("****");


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa 
  e un booleano come parametri. Se il valore booleano è true la 
  funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.
*/

console.log("Esercizio 4");

function deleteOne(stringa1, booleano) {
  if (booleano) {
    return stringa1.slice(1);
  } else {
    return stringa1.slice(0, stringa1.length - 1);
  }
}

console.log(deleteOne(" Rimuove lo spazio iniziale", true)); 
console.log(deleteOne("Rimuove lo spazio finale ", false));

console.log("****");


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una 
  stringa come parametro e la ritorna eliminando tutte le 
  cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("Esercizio 5");


function onlyLetters(stringa) {
}

console.log("****");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una 
  stringa come parametro e ritorna true se la stringa è un 
  valido indirizzo email.
*/


console.log("Esercizio 6");

function isThisAnEmail(stringa) {
  if (stringa.search("@") !== -1) {
    console.log("Hai inserito un'email valida.");
  } else {
    console.log("Non hai inserito un'email valida.");
  }
}

isThisAnEmail("manuel@gmail.com");  


console.log("****");


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna 
  il giorno della settimana corrente.
*/

console.log("Esercizio 7");


function whatDayIsIt(){
  const oggi = new Date();
  const giorno = ["Lunedì", "Marted'", "Mercoledì", "Giovedì", "Venerdì", "Sabato","Domenica"]; 
  return giorno [oggi.getDay()-1];
}

let dataDiOggi= whatDayIsIt();

console.log(dataDiOggi)

console.log("****");

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori 
  estratti con le invocazioni di dice(). L'oggetto ritornato deve anche 
  contenere una proprietà "values", contenente un array con tutti i valori estratti 
  dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("Esercizio 8");

function rollTheDices(num){
  let values = []; 
  let sum = 0;

  for (let i = 0; i < num; i++) {
    let estrazione = dice();  
    values.push(estrazione);   
    sum += estrazione; 
  }
    let sommaValore= { 
      sum: sum,
      values: values,
    }

    console.log(`La somma è ${sum}, mentre i numeri estratti sono ${sommaValore.values}`);  
    console.log(sommaValore);  
  return sommaValore;
}

rollTheDices(2)



console.log("****");

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come 
  parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log("Esercizio 9");

function howManyDays(data){
  let oggi = new Date();
  let differenza = oggi - new Date(data);
  let differenzaTraIGiorni= Math.floor (differenza / 86400000);

return differenzaTraIGiorni;
}

let result = howManyDays ("2024-01-01");

console.log(`Sono trascorsi ${result} giorni dalla data inserita`);

console.log("****");


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve 
  ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("Esercizio 10");

function isTodayMyBirthday (data){

  let compleanno = new Date(data);
  let oggi = new Date(); 

  if (oggi.getDate() === compleanno.getDate() && oggi.getMonth() === compleanno.getMonth()) {

    //alert("Buon Compleanno!");

    return true;
  } 
  
  else {
    return false;
  }
}

let dataDelCompleanno = isTodayMyBirthday("1993-12-13");
console.log("È oggi il tuo compleanno?", dataDelCompleanno);

console.log("****");


// Arrays & Oggetti

console.log("Arrays & Oggetti");




/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto 
  e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("Esercizio 11");


let auto = {
  marca: "Fiat",
  Modello: "500L",
  colore: "BluNero",
  immatricolazione: ">06/2019",
};


function deleteProp(auto, colore) {
  if (colore in auto) { 
    delete auto[colore]; 
  }
  return auto; 
}

let autoModificata = deleteProp(auto, "colore"); 

console.log("Prima della rimozione della proprietà colore:", auto);
console.log("Dopo la rimozione della proprietà colore:", autoModificata);



console.log("****");

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log("Esercizio 12");


function newestMovie() {

  let filmPiuRecente = movies[0]; 
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].Year > filmPiuRecente.Year) {
      filmPiuRecente = movies[i]; 
    }
  }
  return filmPiuRecente;
}

let filmPiuRecente = newestMovie(movies);

//console.log("Il film più recente è:", filmPiuRecente);
console.log(`Il film più recente è ${filmPiuRecente.Title}, uscito nel ${filmPiuRecente.Year}`);

console.log("****");

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film 
  contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 13");

function countMovies() {
  return movies.length;
}

let film= countMovies()
console.log(`Il numero di film contenuto nell'array movies è ${film}`);

console.log("****");

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un 
  array con solamente gli anni di uscita dei film contenuti nell'array 
  "movies" fornito.
*/

console.log("Esercizio 14");

function onlyTheYears()  {
    const anniUscita = [...movies.map(movie => movie.Year)]; 
    return anniUscita;
}


let soloAnno=onlyTheYears(movies)

console.log(soloAnno)


//avrei potuto utilizzare un ciclo for e non clonare l'array creandone uno nuovo


/*let soloAnnoDiUscita = [];  

function onlyTheYears(movies) {
  for (let i = 0; i < movies.length; i++) {
    soloAnnoDiUscita.push(movies[i].Year);  
  }
  return soloAnnoDiUscita;  
}


let soloAnno = onlyTheYears(movies);
console.log(soloAnno); */

console.log("****");

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" 
  che ritorna solamente i film prodotto nel millennio 
  scorso contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 15");

function onlyInLastMillennium() {
  let film2000 = []; 
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].Year >= 2000 && movies[i].Year < 2010) {
      film2000.push(movies[i]);
    }
  }
  return film2000;
}

let duemilas=onlyInLastMillennium(movies)
console.log(duemilas)

console.log("****");

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna 
  la somma di tutti gli anni in cui sono stati prodotti i film 
  contenuti nell'array "movies" fornito.
*/

console.log("Esercizio 16");

function sumAllTheYears() {
  let sum= 0;
  for (let i = 1; i < movies.length; i++) {
  sum += parseInt(movies[i].Year);
}
return sum;
}

let sommaAnni = sumAllTheYears(movies)
console.log(`la somma degli anni dei film nell'array movies è:${sommaAnni}`)

console.log("****");


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" 
  che riceve una stringa come parametro e ritorna 
  i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("Esercizio 17");

function searchByTitle(filmdaCercare) {
  let filmTrovati = [];  

  movies.forEach(movie => {
    if (movie.Title.toLowerCase().includes(filmdaCercare.toLowerCase())) {
      filmTrovati.push(movie);
    }
  });

  return filmTrovati;
}


let foundMovies = searchByTitle("Avenger");
console.log( foundMovies);


console.log("****");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" 
  che riceve una stringa come parametro e ritorna un 
  oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" 
  fornito che contengono la stringa fornita all'interno del 
  proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("Esercizio 18");

function searchAndDivide(elemento) {
  let filmTrovati = searchByTitle(elemento);  //utilizzo la funzione creata nell'esercizio 17
  let filmNonTrovati = movies.filter(movie => 
    !filmTrovati.includes(movie));
  return {
    match: filmTrovati,
    unmatch: filmNonTrovati
  };
}

let FilmTrovati = searchAndDivide("Avengers");

console.log("Film che corrispondono:", FilmTrovati.match);
console.log("Film che NON corrispondono:", FilmTrovati.unmatch);

console.log("****");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che 
  riceve un numero come parametro e ritorna l'array "movies" 
  fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("Esercizio 19");



console.log("****");

console.log("DOM");

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno 
  della pagina.
*/

console.log("Esercizio 20");

function selezionaContainer() {
let container= document.querySelector("#container");
//oppure document.getElementById('container')
return container;
}

let container=selezionaContainer()
console.log(container)//ho creato un div con ID container su HTML per visualizzarlo, altrimenti sarebbe stato null
console.dir(container)

console.log("****");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log("Esercizio 21");

function selezionaTuttiiTd() {
  let td= document.querySelectorAll("td");
  return td;
  }

let td=selezionaTuttiiTd()
console.log(td)//ho creato un div con ID container su HTML per visualizzarlo, altrimenti sarebbe stato null
console.dir(td)

console.log("****");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in 
  console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log("Esercizio 22");


console.log("****");

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di 
  colore rosso a ogni link all'interno della pagina.
*/


console.log("Esercizio 23");

function backgroundColor() {
  let link = document.querySelectorAll('a');
  link.forEach(ele => {
    ele.style.backgroundColor = 'red';
  });
}

backgroundColor()

console.log("****");
  

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla 
  lista non ordinata con id "myList".
*/

console.log("Esercizio 24");

/*

function aggiungiElemento() {
  let lista = document.querySelector('#myList');
  let nuovoElemento = document.createElement('li');
  nuovoElemento.textContent = 'Nuovo elemento della lista';  
  lista.appendChild(nuovoElemento);
}

aggiungiElemento()

*/

console.log("****");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log("Esercizio 25");

/*

function svuotaLista() {
  let lista = document.querySelector('#myList');
  lista.innerHTML = '';
}

svuotaLista()

console.log("****");

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log("Esercizio 26");


console.log("****");

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree() {

  console.log(
    `     *
     **
     ***`)
  
}

halfTree()  //Ovviamente, giusto per giocare

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

