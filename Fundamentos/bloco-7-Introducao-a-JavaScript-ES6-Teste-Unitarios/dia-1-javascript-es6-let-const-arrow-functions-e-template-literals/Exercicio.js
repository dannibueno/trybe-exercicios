/* Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!" */


/* function procuraLetra (frase){

    palavra = "Tryber x aqui";
    const substituiPalavra = palavra.replace("x", frase);

    console.log(substituiPalavra);
}

procuraLetra("bebeto") */



const procuraLetra = (frase) => {
    palavra = "Tryber x aqui";
    const substituiPalavra = palavra.replace("x", frase);

    return substituiPalavra;
}

console.log(procuraLetra("bebeto"));
