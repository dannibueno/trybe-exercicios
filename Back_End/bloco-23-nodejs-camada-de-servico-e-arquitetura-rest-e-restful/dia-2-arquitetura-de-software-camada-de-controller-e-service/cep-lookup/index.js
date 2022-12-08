require('dotenv').config();
const express = require('express');
const cepRoute = require('./routes/cep.route')
const app = express();

app.get('/ping', (req, res) => res.status(200).json({message: 'pong'}));

app.get('/cep', cepRoute);

const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));