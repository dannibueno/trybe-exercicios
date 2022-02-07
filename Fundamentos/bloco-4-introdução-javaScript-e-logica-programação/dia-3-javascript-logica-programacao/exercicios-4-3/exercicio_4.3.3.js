//3 - Considere o array de strings abaixo:Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

  //console.log(array[0].length);

  for (let index = 0; index < array.length; index +=1) {
    if (array[index].length > maiorPalavra.length){
      maiorPalavra = array[index];
    }  
    
    if (array[index].length < menorPalavra.length){
      menorPalavra = array[index];
    }
    
  }
  console.log(maiorPalavra);
  console.log(menorPalavra);

