// 1 - O fatorial de 10

let numero = 10;
let fatorial = numero;

for (let index = numero-1; index > 1; index -= 1) {
    fatorial = fatorial * index;
}

console.log(fatorial);

