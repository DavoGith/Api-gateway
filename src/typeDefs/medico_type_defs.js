const { gql } = require('apollo-server');

const medicoTypeDefs = gql `
    type Medico {
        username: String!
        especialidad: String!
    }
    
    extend type Query {
        medicoByUsername(username: String!): Medico
    }
`;

module.exports = medicoTypeDefs;