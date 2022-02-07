//2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. TRYBER

let word = 'trybe';
let invert = "";

console.log(word.length);

for (let index = word.length - 1; index >= 0; index -=1) {
  
    invert += word[index];
}

  console.log(invert);
