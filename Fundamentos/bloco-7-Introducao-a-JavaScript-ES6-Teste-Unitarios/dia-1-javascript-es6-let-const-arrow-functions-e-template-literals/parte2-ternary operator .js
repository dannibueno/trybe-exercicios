/* 1 - Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */


const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));



//Exemplo Ternario IF/Else - É possível resolver com uma linha usando ternary operator .
// 'condicional' ? 'retorno se verdadeira' : 'retorna se é falsa'

let num1 = 1;
let num2 = 2;
let resultado = ''; 

/* if (num1 > num2){
    resultado = 'Numero 1 é maior que o 2'
}else{
    resultado = 'Numero 2 é maior'
}
console.log(resultado); */


//resultado = num1 > num2 ?  'Numero 1 é maior que o 2' : 'Numero 2 é maior'


num1 > num2 ? resultado = 'Numero 1 é maior que o 2' : resultado = 'Numero 2 é maior'

console.log(resultado);


/* 2 - Crie uma função que receba uma frase e retorne qual a maior palavra. */


function maiorPalavra (frase){

    let arrayFrases = frase.split(" ");
    let maiorPalavra = '';

    for (const palavra of arrayFrases) {
       
       if (palavra.length > maiorPalavra.length){
           maiorPalavra = palavra;
       } 

       // console.log(maiorPalavra);        
    }

    return maiorPalavra;   

}

let resultado = maiorPalavra ('A vida é belissima');
console.log(resultado);



// usando arrow function

const novaMaiorPalavra = outraFrase => {
    let arrayFrases = outraFrase.split(" ");
    let maiorPalavra = '';

    for (const palavra of arrayFrases) {
       
       if (palavra.length > maiorPalavra.length){
           maiorPalavra = palavra;
       } 

       // console.log(maiorPalavra);        
    }

    return maiorPalavra;   

}
let resultado = novaMaiorPalavra ('Amanhã é domingooooooo');
console.log(resultado);




