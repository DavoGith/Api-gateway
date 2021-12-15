const citaResolver = {
    Query: {
        citaByPaciente: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.medicoAPI.citaByPaciente(username)
            else
                return null
            
        }
    },
    Mutation: {
        createCita: async(_, { cita }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (cita.paciente == usernameToken)
                return dataSources.medicoAPI.createCita(cita)
            else
                return null
        }

    }
};


module.exports = citaResolver;