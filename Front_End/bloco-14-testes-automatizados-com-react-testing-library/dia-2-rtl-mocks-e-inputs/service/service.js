// 1 - Defina uma função que gere um número aleatório entre 0 e 100.

// const randomNumber = () => Math.floor(Math.random()*101) 
// console.log(Math.floor(Math.random()*101));
// console.log(randomNumber());


// ***********************************************************************

// 2- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.

// const randomNumber = (a, b) => a / b;
// console.log(randomNumber(20, 5));


// ***********************************************************************

// 3 - Utilize o mock e desenvolva uma nova implementação que receba três parâmetros e Retorne a multiplicação dos parâmetros.
// Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
// Faça os testes que achar necessário.

// const randomNumber = (a, b, c) => a * b * c;
// console.log(randomNumber(2, 2, 2));


const randomNumber = (number) => number * 2;
// console.log(randomNumber(6));


// ***********************************************************************

// 4 - Crie três funções.Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta. Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra. Elabore a terceira função: essa função deve receber duas strings e concatená-las.

// const funcaoUm = (string) => string.toUpperCase();
// // // console.log(funcaoUm("teste"));

// const funcaoDois = (string) => string.charAt(0);
// // // console.log(funcaoDois("teste"));

// const funcaoTres = (string1, string2) => string1.concat(string2);
// // // console.log(funcaoTres("teste", "Dani"));


const funcaoUm = (string) => string.toLowerCase();
// console.log(funcaoUm("TESTE"));

const funcaoDois = (string) => string.charAt(string.length - 1);
console.log(funcaoDois("teste"));

const funcaoTres = (string1, string2, string3) => string1.concat(string2 + string3);
// console.log(funcaoTres("teste", "Dani", "teste"));




module.exports = {
    randomNumber,
    funcaoUm,
    funcaoDois,
    funcaoTres,
}



