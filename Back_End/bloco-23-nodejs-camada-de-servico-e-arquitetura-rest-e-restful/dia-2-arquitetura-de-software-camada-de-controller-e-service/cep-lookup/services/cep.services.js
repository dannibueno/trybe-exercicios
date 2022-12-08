const CepModel = require('../models/Cep');

const cepService = {
  getAddress: async (cep) => {
    const data = await CepModel.getByPk(cep);

    if (!data.length) throw Error ("CEP não encontrado");

    return data;
  }
};

module.exports = cepService;