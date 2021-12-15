//Se llama al typedef (esquema) de cada submodulo
const medicoTypeDefs = require('./medico_type_defs');
const citaTypeDefs = require('./cita_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, medicoTypeDefs, citaTypeDefs];

//Se exportan
module.exports = schemasArrays;