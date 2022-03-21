// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort


const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];


function nameAndAge() {
    return books
        .map((book) => (
            {
                author: book.author.name,
                age: book.releaseYear - book.author.birthYear,
            }
        ))
        .sort((obj1, obj2) => obj1.age - obj2.age);
    //coloca em order crescente. Se fazer obj2 - obj1 ficaria em order descrescente.
}

console.log(nameAndAge());

//   *****************************************************************************************************************

//4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered() {
    const currentYear = new Date().getFullYear();
    return books.filter((book) => (book.releaseYear < currentYear - 60
    )).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
  }

console.log(oldBooksOrdered());

//   *****************************************************************************************************************

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName() {
    return books.filter((book) => (
      book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.'
    ))[0].name;
  }
 

  //outra resolução 

  function authorWith3DotsOnName() {
    return books.find((book) => (
      book.author.name.split(' ')
        .filter((word) => word.endsWith('.')).length === 3
    )).name;
  }