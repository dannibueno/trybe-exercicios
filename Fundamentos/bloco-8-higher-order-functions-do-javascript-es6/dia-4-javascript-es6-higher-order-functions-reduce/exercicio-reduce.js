//1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
   
   return arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual), [])

   //acumulador = variavel que vai acumular os valores anteriores
   //valorAtual = variavel que recebe o valor atual
   
}
console.log(flatten());


// Reduce --> arrays.reduce((acumulador, item)=> {funçao aqui dentro}, valorQueDesejaIniciar)