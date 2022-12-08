const invalidCep = {
  error: {
    code:"invaliData", "message": "CEP inválido"
  }
}



const validators = {
  validaCep: (req, res, next) => {
    const { cep } = req.params; 
    const cepRegex = /^\d{5}-?\d{3}$/;
    if (!cepRegex.test(cep)) {
      return res.status(400).json(invalidCep)
    }

    next();


  },
};

module.exports = validators;