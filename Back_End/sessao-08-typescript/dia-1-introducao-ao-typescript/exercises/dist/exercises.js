"use strict";
// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto “Olá Nome”.
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = exports.square = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array. Para isso, faremos uma função add que será chamada dentro da função sumArray, que por sua vez utilizará o método reduce para realizar a soma dos valores.
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// A quarta função que vamos desenvolver será para calcular a área de um triângulo. A fórmula para isso é multiplicar a medida da base pela medida da altura e dividir o resultado por dois.
function square(side) {
    return side ** 2;
}
exports.square = square;
// A última função que vamos desenvolver será para calcular a área de um retângulo. A área do retângulo é dada pela multiplicação da base pela altura.
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
