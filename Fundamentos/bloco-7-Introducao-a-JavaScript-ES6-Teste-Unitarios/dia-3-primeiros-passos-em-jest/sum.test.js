const {sum, myRemove, myFizzBuzz} = require('./sum');

  describe ('testa a função sum', () => {

    test('adds 4 + 5 to equal 9', () => {
        expect(sum(4, 5)).toBe(9);
      });
      
      test('adds 0 + 0 to equal 0', () => {
          expect(sum(0, 0)).toBe(0);
        });
      
        test('deve disparar um erro caso receba como parâmetro uma string', () => {
          expect(() => sum(4, '5')).toThrowError();
          expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
        })
  });

  
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")


describe ('testa função myRemove', () => {
  test('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});


// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado