/* Questo array viene usato per gli esercizi. Non modificarlo. */
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
];

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('ESERCIZIO A');

const sum = 10 + 20;
console.log(sum);

console.log('------------------------------');

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('ESERCIZIO B');

const random = Math.floor(Math.random() * 21);
console.log(random);

console.log('------------------------------');

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('ESERCIZIO C');

const me = {
  name: 'Gianluca',
  surname: 'Di Diego',
  age: 23,
};
console.log(me);

console.log('------------------------------');

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('ESERCIZIO D');

function removeAge(obj) {
  delete obj.age;
}

removeAge(me);
console.log(me);

console.log('------------------------------');

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('ESERCIZIO E');

function addSkills(obj) {
  obj.skills = ['Python', 'C#'];
}

addSkills(me);
console.log(me);

console.log('------------------------------');

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('ESERCIZIO F');

function addNewSkill(obj) {
  obj.skills.push('JS');
}

addNewSkill(me);
console.log(me);

console.log('------------------------------');

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('ESERCIZIO G');

function removeLastSkill(obj) {
  obj.skills.pop();
}

removeLastSkill(me);
console.log(me);

console.log('------------------------------');

// Funzioni
console.log('******************************');
console.log('**** ESERCIZI FUNZIONI *******');
console.log('******************************');

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('ESERCIZIO 1');

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(dice());

console.log('------------------------------');

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('ESERCIZIO 2');

function whoIsBigger(num1, num2) {
  return Math.max(num1, num2);
}

console.log(whoIsBigger(10, 1));

console.log('------------------------------');

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('ESERCIZIO 3');

function splitMe(str) {
  return str.split(' ');
}

const string1 = 'Nel mezzo del cammin di nostra vita';
console.log(splitMe(string1));

console.log('------------------------------');

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('ESERCIZIO 4');

function deleteOne(str, bool) {
  if (bool) {
    return str.slice(1, str.length);
  } else {
    return str.slice(0, str.length - 1);
  }
}

const string2 = 'Topolino';
console.log(deleteOne(string2, false));

console.log('------------------------------');

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('ESERCIZIO 5');

function onlyLetters(str) {
  const myArr = str.split(' ');
  const test = myArr.filter((element) => !isFinite(element));
  return test.join(' ');
}

const string3 = 'I have 4 dogs';
console.log(onlyLetters(string3));

console.log('------------------------------');

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('ESERCIZIO 6');

// la funzione controlla che l'email sia di almeno 8 caratteri, tra cui ci sia una @ e successivamente compaia un . e che dopo il punto vi siano almeno due caratteri e tra la @ e il . vi siano almeno due caratteri
function isThisAnEmail(str) {
  if (str.length > 7) {
    const indexAt = str.indexOf('@');
    const indexDot = str.indexOf('.', indexAt);
    if (indexAt && indexDot > indexAt) {
      let lastCharacters = false;
      let mailService = false;
      if (str.slice(indexDot + 1).length >= 2) {
        lastCharacters = true;
      }
      if (str.slice(indexAt + 1, indexDot).length >= 2) {
        mailService = true;
      }

      if (lastCharacters && mailService) {
        return true;
      }
    }
  }
  return false;
}

const email = 'gianluca@didiego.com';
console.log(email);
console.log(isThisAnEmail(email));

// altro modo è utilizzare la regex
console.log('------------------------------');

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('ESERCIZIO 7');

function whatDayIsIt() {
  const days = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ];
  const today = new Date();
  return days[today.getDay()];
}

console.log(whatDayIsIt());

console.log('------------------------------');

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('ESERCIZIO 8');

function rollTheDices(num) {
  const extractions = [];
  for (let i = 0; i < num; i++) {
    extractions.push(dice());
  }

  const sum = extractions.reduce((sum, element) => sum + element);

  const myObj = {
    sum: sum,
    values: extractions,
  };

  return myObj;
}

console.log(rollTheDices(3));

console.log('------------------------------');

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('ESERCIZIO 9');

// Si usi la notazione ISO yyyy-mm-dd per passare la data desiderata alla funzione sotto forma di stringa
function howManyDays(strDay) {
  const myDay = new Date(strDay);
  const today = new Date();

  return Math.floor((today - myDay) / 1000 / 60 / 60 / 24);
}

const designedDay = '2024-11-5';
console.log(
  `Dalla data indicata sono trascorsi ${howManyDays(designedDay)} giorni`
);

console.log('------------------------------');

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log('ESERCIZIO 10');

function isTodayMyBirthday(strDay) {
  const myBirthday = new Date(strDay);
  const today = new Date();

  if (
    myBirthday.getMonth() === today.getMonth() &&
    myBirthday.getDate() === today.getDate()
  ) {
    return true;
  } else {
    return false;
  }
}

const birthday = '07-11';
if (isTodayMyBirthday(birthday) === true) {
  console.log('Oggi è il tuo compleanno!');
} else {
  console.log('Oggi non è il tuo compleanno!');
}

console.log('------------------------------');

// Arrays & Oggetti
console.log('******************************');
console.log('** ESERCIZI ARRAYS & OGGETTI *');
console.log('******************************');

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log('ESERCIZIO 11');

const myPhone = {
  productor: 'Realme',
  storage: '512',
  price: 10,
  color: 'beige',
};

function deleteProp(obj, str) {
  delete obj[`${str}`];

  return obj;
}

console.log(deleteProp(myPhone, 'storage'));

console.log('------------------------------');

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('ESERCIZIO 12');

function newestMovie(arr) {
  let year = 0;
  let myMovie = {};

  for (let i = 0; i < arr.length; i++) {
    if (year < parseInt(arr[i].Year)) {
      year = parseInt(arr[i].Year);
      myMovie = arr[i];
    }
  }

  return myMovie;
}

console.log(`Il film più recente in lista è ${newestMovie(movies).Title}`);
console.log(newestMovie(movies));

console.log('------------------------------');

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('ESERCIZIO 13');

function countMovies(arr) {
  return arr.length;
}

console.log(`La lista contiene ${countMovies(movies)} film`);

console.log('------------------------------');

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('ESERCIZIO 14');

function onlyTheYears(arr) {
  const myArr = [];
  arr.forEach((element) => {
    myArr.push(element.Year);
  });
  return myArr;
}

console.log(onlyTheYears(movies));

console.log('------------------------------');

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('ESERCIZIO 15');

function onlyInLastMillennium(arr) {
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].Year) < 2001) {
      myArr.push(arr[i]);
    }
  }

  return myArr;
}

console.log(onlyInLastMillennium(movies));

console.log('------------------------------');

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('ESERCIZIO 16');

function sumAllTheYears(arr) {
  const myArr = onlyTheYears(arr);
  return myArr.reduce((sum, element) => parseInt(sum) + parseInt(element));
}

console.log(sumAllTheYears(movies));

console.log('------------------------------');

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('ESERCIZIO 17');

function searchByTitle(arr, strTitle) {
  const myArr = [];
  arr.forEach((movie) => {
    if (movie.Title.indexOf(strTitle) >= 0) {
      myArr.push(movie);
    }
  });

  return myArr;
}

const search = 'Avengers';
console.log(searchByTitle(movies, search));

console.log('------------------------------');

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('ESERCIZIO 18');

function searchAndDivide(arr, strDivide) {
  const moviesWith = [];
  const moviesWithOut = [];

  arr.forEach((movie) => {
    if (movie.Title.indexOf(strDivide) >= 0) {
      moviesWith.push(movie);
    } else {
      moviesWithOut.push(movie);
    }
  });

  const myObj = {
    match: moviesWith,
    unmatch: moviesWithOut,
  };

  return myObj;
}

const searchWord = 'Lord';
console.log(searchAndDivide(movies, searchWord));

console.log('------------------------------');

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('ESERCIZIO 19');

function removeIndex(arr, index) {
  arr.splice(index, 1);
  return arr;
}

console.log(removeIndex(movies, 1));

console.log('------------------------------');

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log('******************************');
console.log('*****   DOM   ****************');
console.log('******************************');

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('ESERCIZIO 20');

function getIdContainer() {
  return document.getElementById('container');
}

const container = getIdContainer();
console.log(container);

console.log('------------------------------');

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('ESERCIZIO 21');

function getTagTd() {
  return document.getElementsByTagName('td');
}

const arrTd = getTagTd();
console.log(arrTd);

console.log('------------------------------');

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('ESERCIZIO 22');

function showTdContent(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].innerText);
  }
}

showTdContent(getTagTd());

console.log('------------------------------');

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('ESERCIZIO 23');

function setLinkBackground() {
  const arrLink = document.querySelectorAll('a');
  arrLink.forEach((element) => {
    element.style.backgroundColor = 'red';
  });
}

setLinkBackground();

console.log('------------------------------');

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('ESERCIZIO 24');

// Variabile creata globale perchè utilizzata anche nell'esercizio successivo
const myList = document.getElementById('myList');

function addNewListElement() {
  const myLi = document.createElement('li');
  myLi.innerText = 'Nuovo elemento della lista';
  myList.appendChild(myLi);
}

addNewListElement();

console.log('------------------------------');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('ESERCIZIO 25');

function deleteList() {
  myList.innerHTML = '';
}

// deleteList();

console.log('------------------------------');

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('ESERCIZIO 26');

function addClassTest() {
  const arrTr = document.querySelectorAll('tr');
  arrTr.forEach((element) => {
    element.classList.add('test');
  });
}

addClassTest();

console.log('------------------------------');

// [EXTRA] JS Avanzato
console.log('******************************');
console.log('***   JS AVANZATO   **********');
console.log('******************************');

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('ESERCIZIO 27');

function halfTree(num) {
  for (let i = 0; i < num; i++) {
    let row = '';
    for (let j = 1; j <= i + 1; j++) {
      row += '*';
    }
    console.log(row);
  }
}

halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log('ESERCIZIO 28');

function tree(num) {
  switch (num) {
    case 0:
      return;
      break;
    case 1:
      return console.log('*');
      break;
    default:
      for (let i = 0; i < num; i++) {
        let row = '*';
        for (let j = 1; j <= i; j++) {
          row += '**';
        }
        let space = '';

        const index = num - i - 1;
        for (let k = 0; k < index; k++) {
          space += ' ';
        }

        row = space + row + space;
        console.log(row);
      }
      break;
  }
}

tree(10);

console.log('------------------------------');

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log('ESERCIZIO 29');
