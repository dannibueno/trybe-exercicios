const express = require('express');
const async = require('express-async');
const joi = require('joi');
const userModel = require('./models/userModel');
require('express-async-errors');

const app = express()
const port = 3010;


const validateBody = (user) => {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(6).required(),
  })

  const {error, value} = schema.validate(user)
  if (error) throw new Error(error.message);

  return value;
};


const validateID = (user) => {
  const schema = joi.object({
    id: joi.number().integer().required(),
  });

  const {error, value} = schema.validate(user)
  if (error) throw new Error(error.message);

  return value;
};


app.use(express.json());

app.get('/', (req, res) => res.send('hello word'));

app.post('/user', async (req, res) => {
  const {firstName, lastName, email} = req.body
  const user = validateBody(req.body);
  const idUser = await userModel.create(user);
  res.status(201).json({ id:idUser, firstName, lastName, email} );
});

app.get('/user', async (req, res) => {
  const users = await userModel.findAll();
  res.status(200).json(users);
})

app.get('/user/:id', async (req, res) => {
  const { id } = validateID(req.params);
  const user = await userModel.findById(id);
  res.status(200).json(user);
})

app.put('/user/:id', async (req, res) => {
  const { id } = validateID(req.params);
  const user = validateBody(req.body);
  await userModel.checkIfExists(id);
  await userModel.update(id, user);
  res.status(200).json(user);
})

app.delete('/user/:id', async (req, res) => {
  const { id } = validateID(req.params);
  await userModel.checkIfExists(id);
  await userModel.delete(id);
  res.status(200).json({message: 'Usuario excluido com sucesso!'});
})


app.use((err, req, res, next) => {
  const {message} = err;

  res.status(404).json({message})
})

app.listen(port, () => console.log(`Funciona na porta ${port}`))