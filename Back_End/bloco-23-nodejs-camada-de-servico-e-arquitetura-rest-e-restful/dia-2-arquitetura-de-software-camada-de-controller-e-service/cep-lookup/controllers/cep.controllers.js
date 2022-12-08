const cepService = require('../services/cep.services');


const cepController = {
  getAddress: async(req, res) => {
    const { cep } = req.params;

    const address = await cepService.getAddress(cep);

   
    res.status(200).json({address});

  }


};

module.exports = cepController;