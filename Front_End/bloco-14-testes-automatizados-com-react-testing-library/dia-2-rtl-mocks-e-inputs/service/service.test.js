const service = require('./service')
const { test, expect } = require('@jest/globals')

// 1- Utilize o mock e defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

describe("testando implementações", () => {
    test('Testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
        service.randomNumber = jest.fn().mockReturnValue(10);

        expect(service.randomNumber()).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled(); // verifica se a funcao foi chamada
        expect(service.randomNumber).toHaveBeenCalledTimes(1); // quantas vezes foi chamada, no caso 1 pq passei o parametro 1.
    })

    // 2 - Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
    // Verifique se a aplicação da nova implementação acontece apenas uma vez.

    test('Testando se a função foi chamada e a nova implementação de divisão foi aplicada', () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

        expect(service.randomNumber(10, 2)).toBe(5);
        expect(service.randomNumber).toHaveBeenCalled(); // verifica se a funcao foi chamada
        expect(service.randomNumber).toHaveBeenCalledTimes(1); // quantas vezes foi chamada, no caso 1 pq passei o parametro 1.
        expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
    })


    // 3 - Realize os testes que achar necessário.

    test('Testando se a função foi chamada e a nova implementação de multiplicação foi aplicada', () => {
        service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

        expect(service.randomNumber(2, 2, 2)).toBe(8);
        expect(service.randomNumber).toHaveBeenCalled(); // verifica se a funcao foi chamada
        expect(service.randomNumber).toHaveBeenCalledTimes(1); // quantas vezes foi chamada, no caso 1 pq passei o parametro 1.
        expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);
    })

    test('Testando função que recebe um parâmetro e retorna seu dobro', () => {
        service.randomNumber.mockReset();

        expect(service.randomNumber).toHaveBeenCalledTimes(0);
        service.randomNumber.mockImplementation(a => a * 2);

        expect(service.randomNumber(5)).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5);
    })

});

   // 4 - Realize os testes que achar necessário.

   describe("testando implementações 4", () => {
     test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
       const mockFirstFunction = jest.spyOn(service, "firstFunction" ).mockImplementation(a => a.toLowerCase());
   
       expect(mockFirstFunction("UPPERCASE")).toBe("uppercase");
       expect(service.firstFunction).toHaveBeenCalledTimes(1);
       expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
     });
   
     test("mockando função que recebe um parâmetro e retorna a última letra", () => {
       const mockSecondFunction = jest.spyOn(service, "secondFunction").mockImplementation(a => a.charAt(a.length - 1));
   
       expect(mockSecondFunction("letter")).toBe("r");
       expect(service.secondFunction).toHaveBeenCalledTimes(1);
       expect(service.secondFunction).toHaveBeenCalledWith("letter");
     });
   
     test("mockando função que recebe 3 parâmetros e os concatena", () => {
       const mockThirdFunction = jest.spyOn(service, "thirdFunction").mockImplementation((a, b, c) => a.concat(b, c));
   
       expect(mockThirdFunction("tr", "y", "be")).toBe("trybe");
       expect(service.thirdFunction).toHaveBeenCalledTimes(1);
       expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
     });
   
     test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
       service.firstFunction.mockRestore();
   
       expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
     })
   });