const { gql } = require('apollo-server');

const citaTypeDefs = gql `
    type Cita {
        id: String
        paciente: String!
        fechaCita: String!
        horaCita: Int!
        medico: String!
        especialidad: String!
    }
    
    input CitaInput {
        paciente: String!
        fechaCita: String!
        horaCita: Int!
        medico: String!
        especialidad: String!
    }

    extend type Query {
        citaByPaciente(username: String!): [Cita]
    }
    
    extend type Mutation {
        createCita(cita: CitaInput!): Cita
    }
`;

module.exports = citaTypeDefs;