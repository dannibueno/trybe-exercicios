function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }


  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }


  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }


  
  const hydrate = (string) => {
    const splitString = string.split('');
    let glassesOfWater = 0;
  
    for (let index = 0; index < splitString.length; index += 1) {
      const parsedCharacter = parseInt(splitString[index]);
  
      if (parsedCharacter) {
        glassesOfWater += parsedCharacter;
      }
    }
  
    let glass = 'copo';
  
    if (glassesOfWater > 1) {
      glass = 'copos';
    }
  
    return `${glassesOfWater} ${glass} de água`;
  };
  


  module.exports = {sum, myRemove, myFizzBuzz, hydrate}


