require('express-async-errors');
const { json } = require('body-parser');
const { verify } = require('crypto');
const { response, request } = require('express');
const fs = require('fs').promises;
const express = require('express'); // 1

const app = express() //2

app.use(express.json()); // 3

// 1 Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get('/ping', (request, response) => {
    response.status(200).json({ menssage: 'pong'})
})


// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.

app.post('/hello', (request, response) => {
    const { name } = request.body;
    if(name === "") {
        response.status(400).json({ menssage: "favor informe nome"})
    }
    response.status(200).json({ menssage: `Hello ${name}`})
})


// Crie uma rota POST /greetings 🚀
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.

app.post('/greetings', (request, response) => {
    const { name, age } = request.body;

    if(age > 17) {
        response.status(200).json({ menssage: `Hello ${name}`})
    }
    response.status(401).json({ menssage: "Unauthorized"})
})

// Crie uma rota PUT /users/:name/:age. 🚀
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

app.put('/users/:name/:age', (request, response) => {
    const { name, age } = request.params;
    console.log(name);
    response.status(200).json({ menssage: `Seu nome é ${name} e voce tem ${age} de idade`})
})








// ****************************************************************************// 
    // Exercicio 5
// ****************************************************************************// 

   // Utilize o modulo fs do Node para ler/escrever arquivos.

const readFile = async () => {
    const persons = await fs.readFile('./simpsons.json', 'utf8');
    return JSON.parse(persons)
};

const writeFile = async (conteudo) => {
    await fs.writeFile('./simpsons.json', JSON.stringify(conteudo));
};


// Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.

app.get('/simpsons', async (request, response) => {
    const persons = await readFile();
    // console.log("persons");
    response.status(200).json(persons);
});


// Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.

app.get('/simpsons/:id', async (req, res) => {
    try {
      const simpsons = await readFile();
  
      const simpson = simpsons.find(({ id }) => id === req.params.id);
  
      if (!simpson) {
        // não esqueça de adicionar o return para impedir de que seu código continue.
        return res.status(404).json({ message: 'simpson not found' });
      }
  
      return res.status(202).json(simpson);
    } catch (error) {
      return res.status(500).end();
    }
  });


//   Crie um endpoint POST /simpsons. 🚀
//   Este endpoint deve cadastrar novos personagens.
//   O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
//   Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
//   Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.


app.post('/simpsons', async (req, res) => {
    const { id } = req.body;
    const simpsons = await readFile();
    const verify = simpsons.find((simpson) => simpson.id === id )

    if (verify) {
        return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push(req.body);

    await writeFile(simpsons)

    res.status(204).end();
    
  });





// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// lib para tratamento de erros npm i express-async-errors

app.use((err, req, response, next) => {
    const {menssage} = err;
    response.status(500).json({menssage: menssage})
})


// ****************************************************************************// 

app.listen(3008, () => console.log("Rodando aplicação na porta 3008")) //4 
