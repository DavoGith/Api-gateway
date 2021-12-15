const medicoResolver = require('./medico_resolver');
const citaResolver = require('./cita_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(medicoResolver, citaResolver, authResolver);

module.exports = resolvers;