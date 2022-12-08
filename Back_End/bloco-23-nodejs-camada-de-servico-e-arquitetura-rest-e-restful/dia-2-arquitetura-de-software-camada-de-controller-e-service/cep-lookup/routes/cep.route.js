const { Router } = require('express');
const { validaCep } = require('../middlewares/cep.validators');
const cepController = require('../controllers/cep.controllers');
const route = Router();

route.get('/:cep', validaCep, cepController.getAddress);

module.exports = route;