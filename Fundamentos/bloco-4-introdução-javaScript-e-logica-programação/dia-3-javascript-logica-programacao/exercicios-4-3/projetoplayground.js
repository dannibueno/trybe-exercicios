/* // Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, heiht) {
  return (base * heiht) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}



// Desafio 4

function concatName(itens) {
  let ultimoItem = itens[itens.length - 1];
  let primeiroItem = itens[0];

  return ultimoItem + ", " + primeiroItem;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
console.log(footballPoints(14,8)); */

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let repeticoes = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let values in array) {
    if (array[values] === maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));