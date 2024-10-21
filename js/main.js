/**
 * Funzione che chiede un numero in un prompt dato minimo e massimo
 * @param {Number} min
 * @param {Number} max
 * @param {String} message
 */
function askNumber(min, max, message = 'Dammi un numero') {
  let userNumber = parseInt(prompt(message));

  while (isNaN(userNumber) || userNumber < min || userNumber > max) {
    userNumber = parseInt(prompt('Valore non valido. ' + message));
  }

  return userNumber;
}

/**
 * Funzione che chiede all'utente una parola
 * @param {Array} whitelist elenco di parole accettate. se vuoto tutte le parole sono ammesse
 * @param {String} message
 */
function askString(whitelist = [], message = 'Dammi una stringa') {
  let userString = prompt(message);

  if (whitelist.length) {
    while (!whitelist.includes(userString)) {
      userString = prompt('La parola deve essere includa nella whitelist. ' + message);
    }
  }

  return userString;
}

/**
 * Genera un numero tra minimo e massimo
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Controlla se un numero è pari
 * @param {Number} num
 * @returns {Boolean}
 */
function isNumberEven(num) {
  return num % 2 === 0;
}

/**
 * Controlla se lo user ha vinto al gioco del "pari o dispari"
 * @param {Number} userNumber
 * @param {Number} opponentNumber
 * @param {String} userChoice
 * @returns {Boolean}
 */
function isUserWinner(userNumber, opponentNumber, userChoice) {
  console.log('userNumber: ' + userNumber);
  console.log('opponentNumber: ' + opponentNumber);
  console.log('userChoice: ' + userChoice);

  const sum = userNumber + opponentNumber;
  console.log('sum: ' + sum);

  const evenWinCondition = userChoice === 'pari' && isNumberEven(sum);
  const oddWinCondition = userChoice === 'dispari' && !isNumberEven(sum);
  console.log('evenWinCondition: ' + evenWinCondition);
  console.log('oddWinCondition: ' + oddWinCondition);

  return evenWinCondition || oddWinCondition;
}

// # Preparo la configurazione di gioco
const allowedChoices = ['Pari', 'Dispari'];
const minNumber = 1;
const maxNumber = 10;

// # Chiedo pari o dispari all'utente
const messageChoice = 'Inserisci "' + allowedChoices.join(' o ') + '';
const userChoice = askString(allowedChoices, messageChoice);

// # Chiedo un numero all'utente
const messageNumber = `Dammi un numero da ${minNumber} a ${maxNumber}`;
const userNumber = askNumber(minNumber, maxNumber, messageNumber);

// # Genero un numero per il PC
const pcNumber = generateNumber(minNumber, maxNumber);

// # Stabilisco il vincitore
const userWon = isUserWinner(userNumber, pcNumber, userChoice);
console.log('userWon: ' + userWon);
