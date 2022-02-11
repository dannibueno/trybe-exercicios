
//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

/* let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(" Bem vinda " + info.personagem); */


function fizzBuzz(numeros) {
  let array = [];

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0) {
      array[index] = "fizz";
    }
  }
  return array;
}
console.log(fizzBuzz([9]));