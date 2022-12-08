const connection = require('./connection');

const Cep = {
  getByPk: async (cep) => {
    const result = await connection.query(`
    SELECT * FROM cep_lookup.ceps
    WHERE cep = ?  
    `, [cep]);
    return result;
  }
};

module.exports = Cep;